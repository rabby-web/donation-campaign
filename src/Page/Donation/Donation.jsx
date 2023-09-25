import { useEffect, useState } from "react";
import DonationDetails from "../../DonationDetails/DonationDetails";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const donationsItem = JSON.parse(localStorage.getItem("donations"));
    if (donationsItem) {
      setDonations(donationsItem);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  return (
    <div className="container mx-auto">
      {noFound && (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {isShow
          ? donations.map((donation) => (
              <DonationDetails
                key={donation.id}
                donation={donation}
              ></DonationDetails>
            ))
          : donations
              .slice(0, 2)
              .map((donation) => (
                <DonationDetails
                  key={donation.id}
                  donation={donation}
                ></DonationDetails>
              ))}
      </div>
      <div>
        {donations.length > 2 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-5 bg-green-700 rounded py-2 my-4 text-white block mx-auto"
          >
            {isShow ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;

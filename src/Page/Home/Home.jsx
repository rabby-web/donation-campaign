import Banner from "../Banner/Banner";
import AllCart from "../AllCart/AllCart";
import { useEffect, useState } from "react";

const Home = () => {
  // const donations = useLoaderData();
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
            {donations?.map((cart) => (
              <AllCart key={cart.id} cart={cart}></AllCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import swal from "sweetalert";
import PropTypes from "prop-types";

const CartDetails = ({ donation }) => {
  console.log(typeof donation);
  const { card_img, price, description, category, style, id } = donation || {};
  console.log(donation);
  const handleAddToDonate = () => {
    const addedDonate = [];
    const donationsItem = JSON.parse(localStorage.getItem("donations"));

    if (!donationsItem) {
      addedDonate.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonate));
      swal("Done!", "Your Donation Successfully!", "success");
    } else {
      const isExists = donationsItem.find((donation) => donation.id === id);
      if (!isExists) {
        addedDonate.push(...donationsItem, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonate));
        swal("Done!", "Your Donation Successfully!", "success");
      } else {
        swal("Sorry!", "Already Donated!", "error");
      }
    }
  };
  return (
    <div className="w-full md:w-2/3 mx-auto my-4">
      <div className="rounded-lg relative mx-3">
        <img className="w-full  h-auto rounded-lg" src={card_img} alt="" />
        <div className="absolute bottom-0 w-full bg-[#0B0B0B80] py-2 md:py-5 rounded-b-lg">
          <button
            onClick={handleAddToDonate}
            className="py-2 px-4 m-3 rounded text-lg"
            style={{ backgroundColor: style?.t_b_color }}
          >
            Price: {price}
          </button>
        </div>
      </div>

      <div className="px-3">
        <h1 className="text-3xl font-semibold  mt-3">{category}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
CartDetails.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default CartDetails;

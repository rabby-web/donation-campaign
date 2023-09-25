import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";

const Cart = () => {
  const [donation, setDonation] = useState([]);
  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations?.find((donation) => donation.id === id);
    setDonation(findDonation);
  }, [id, donations]);
  return (
    <div className="container mx-auto">
      <CartDetails donation={donation}></CartDetails>
    </div>
  );
};

export default Cart;

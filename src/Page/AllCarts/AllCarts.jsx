import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const AllCarts = () => {
  const donations = useLoaderData();
  return (
    <div className="my-4 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {donations.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default AllCarts;

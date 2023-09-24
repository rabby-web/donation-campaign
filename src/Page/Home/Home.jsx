import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import AllCart from "../AllCart/AllCart";

const Home = () => {
  const donations = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
            {donations.map((cart) => (
              <AllCart key={cart.id} cart={cart}></AllCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

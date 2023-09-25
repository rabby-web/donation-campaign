import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Carts from "../Carts/Carts";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTrueBtn, setIsTrueBtn] = useState(false);
  const showCarts = useLoaderData();
  return (
    <div>
      <div>
        <Banner
          setInputValue={setInputValue}
          setIsTrueBtn={setIsTrueBtn}
        ></Banner>
        <Carts
          isTrueBtn={isTrueBtn}
          inputValue={inputValue}
          showCarts={showCarts}
        ></Carts>
      </div>
    </div>
  );
};

export default Home;

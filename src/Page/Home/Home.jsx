import Banner from "../Banner/Banner";
import Carts from "../Carts/Carts";
import { useEffect, useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTrueBtn, setIsTrueBtn] = useState(false);
  const [showCarts, setShowCarts] = useState([]);
  // const showCarts = useLoaderData();
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setShowCarts(data));
  }, []);

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

import { useEffect, useState } from "react";
import AllCart from "../AllCart/AllCart";

const Carts = ({ showCarts, inputValue, isTrueBtn }) => {
  const lowerInputValue = inputValue.toLowerCase();

  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    const filterSearchItems = showCarts.filter((showOne) =>
      showOne.category.toLowerCase().includes(lowerInputValue)
    );
    setSearchData(filterSearchItems);
  }, [showCarts, lowerInputValue]);
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          {isTrueBtn
            ? searchData?.map((cart) => (
                <AllCart key={cart.id} cart={cart}></AllCart>
              ))
            : showCarts?.map((cart) => (
                <AllCart key={cart.id} cart={cart}></AllCart>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Carts;

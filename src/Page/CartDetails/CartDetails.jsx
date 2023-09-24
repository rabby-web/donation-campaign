const CartDetails = ({ donation }) => {
  const { card_img, price, description, category, style } = donation || {};
  console.log(donation);
  return (
    <div className="w-full md:w-2/3 mx-auto my-4">
      <div className="rounded-lg relative mx-3">
        <img className="w-full  h-auto rounded-lg" src={card_img} alt="" />
        <div className="absolute bottom-0 w-full bg-[#0B0B0B80] py-2 md:py-5 rounded-b-lg">
          <button
            className="py-2 px-4 m-3 rounded text-lg"
            style={{ backgroundColor: style?.t_b_color }}
          >
            Price: {price}
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-semibold mt-3">{category}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CartDetails;

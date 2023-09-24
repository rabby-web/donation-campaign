const Cart = ({ cart }) => {
  const { card_img, category, title, style } = cart || {};
  //   const cardColor = style.card_bg;
  console.log(cart);
  return (
    <div className="rounded-md">
      <div>
        <img className="w-full" src={card_img} alt="" />
      </div>
      <div
        style={{ backgroundColor: style.card_bg }}
        className="p-3 rounded-md"
      >
        <button
          style={{ backgroundColor: style.btn_bg, color: style.t_b_color }}
          className="py-2 px-3 rounded font-semibold text-base"
        >
          {category}
        </button>
        <h2
          style={{ color: style.t_b_color }}
          className="text-xl font-semibold"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Cart;

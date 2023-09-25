import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const AllCart = ({ cart }) => {
  const { card_img, category, title, style, id } = cart || {};

  console.log(cart);
  return (
    <Link to={`/cart/${id}`}>
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
    </Link>
  );
};

AllCart.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default AllCart;

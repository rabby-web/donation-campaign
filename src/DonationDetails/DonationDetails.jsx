import { Link } from "react-router-dom";

const DonationDetails = ({ donation }) => {
  const { card_img, price, category, style, title, id } = donation || {};
  return (
    <div className="m-2">
      <div
        style={{ backgroundColor: style?.card_bg }}
        className="relative flex w-full  max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={card_img}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-2 md:p-6">
          <button
            style={{ backgroundColor: style?.btn_bg, color: style?.t_b_color }}
            className="mb-4 block font-sans text-base font-semibold leading-relaxed tracking-normal py-2 px-4 rounded antialiased"
          >
            {category}
          </button>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p
            style={{ color: style?.t_b_color }}
            className="mb-4 block font-sans text-base font-semibold leading-relaxed"
          >
            ${price}
          </p>
          <Link to={`/cart/${id}`}>
            <a className="inline-block" href="#">
              <button
                style={{ backgroundColor: style?.t_b_color }}
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                View Details
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;

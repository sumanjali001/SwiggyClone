import PropTypes from "prop-types";
function DiscountCard({ discount }) {
  const disarray = discount.meta.split("|");

  return (
    <div className="w-[250px] m-2 p-2 rounded-xl border-2 border-gray-100">
      <div className="flex ">
        <img
          className="w-10 h-10 m-2"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
          alt="discount"
        />
        <div>
          <p>{disarray[0]}</p>
          <p>{disarray[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default DiscountCard;

DiscountCard.propTypes = {
  discount: PropTypes.string.isRequired,
};

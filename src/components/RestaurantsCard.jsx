import { CDN_URL } from "../utils/constants";
function restaurantsCard({ resData }) {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData.info;

  return (
    <div className=" w-[250px] h-[450px] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg h-[200px] w-full"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="">{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo.toUpperCase()} </h4>
      <h4>
        {sla.deliveryTime}-{sla.deliveryTime + 5} minutes
      </h4>
    </div>
  );
}

export default restaurantsCard;

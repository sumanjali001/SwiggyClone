import { useResdata } from "../utils/useResdata";
import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import RestaurantsCard from "./RestaurantsCard";
import Filter from "./Filter";
import Spinner from "./Spinner";

function Body() {
  const { data, error, isLoading } = useResdata();
  const [searchText, setSearchText] = useState("");
  const [filterRes, setFilterRes] = useState([]);
  const [searchParams] = useSearchParams();

  let filterValue = searchParams.get("filter");

  if (isLoading) return <Spinner />;

  let res = data?.data?.data?.cards
    .filter(
      (card) =>
        card?.["card"]?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
    )
    .map((r) => r.card?.card?.gridElements?.infoWithStyle?.restaurants)
    .filter((res) => res !== undefined)
    .flat();
  let filter;
  if (filterValue && filterValue !== "all") {
    if (filterValue === "ratings") {
      filter = res.filter((res) => res.info.avgRating >= 4.3);
    } else if (filterValue === "delivery-time") {
      filter = res.filter((res) => res.info.sla.deliveryTime < 20);
    }
  } else {
    filter = res;
  }

  function handleClick() {
    let filter = res.filter((r) =>
      r?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRes(filter);
  }

  if (!isLoading)
    return (
      <div className="body">
        <div className="search flex mx-20 my-4 sm:flex-col sm:gap-4 md:flex-row md:justify-between ">
          <div>
            <input
              type="text"
              className=" border-solid border-gray-500  border-2 rounded-lg "
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                handleClick();
              }}
            />
            <button
              className="px-3 py-1 mx-2 rounded-lg bg-green-100"
              onClick={handleClick}
            >
              search
            </button>
          </div>
          <Filter />
        </div>

        {searchText === "" ? (
          <div className="flex flex-wrap justify-center">
            {filter.map((restaurant, i) => (
              <Link to={"/restaurants/" + restaurant.info.id} key={i}>
                <RestaurantsCard resData={restaurant} key={i} />
              </Link>
            ))}
          </div>
        ) : searchText !== "" && filterRes.length !== 0 ? (
          <div className="flex flex-wrap justify-center">
            {filterRes.map((restaurant, i) => (
              <Link to={"/restaurants/" + restaurant.info.id} key={i}>
                <RestaurantsCard resData={restaurant} key={i} />
              </Link>
            ))}
          </div>
        ) : (
          <h1 className=" text-2xl font-bold text-center my-20 text-red-400">
            No Results Found !!! Please Search for another Restaurants
          </h1>
        )}
      </div>
    );
}

export default Body;

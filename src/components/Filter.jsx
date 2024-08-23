import { func } from "prop-types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const options = [
  { value: "all", label: "All" },
  { value: "ratings", label: "Ratings  4.3 +" },
  { value: "delivery-time", label: " Fast Delivery" },
];
function Filter() {
  const [active, setActive] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value, index) {
    setActive(index);
    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex gap-2">
      <p className="font-bold p-1">Filter By</p>
      {options.map((option, index) => (
        <button
          className={`border-2 border-gray-200 px-2 rounded-xl text-gray-700 ${
            active === index ? "bg-green-200" : ""
          }`}
          key={option.value}
          onClick={() => handleClick(option.value, index)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function resdata() {
  return axios.get(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4673&lng=78.8242&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
}
export function useResdata() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["reslist"],
    queryFn: resdata,
  });

  return { data, error, isLoading };
}

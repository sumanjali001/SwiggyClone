import { useQuery } from "@tanstack/react-query";
import { MENU_API } from "./constants";
import axios from "axios";

function getRes(id) {
  return axios.get(MENU_API + id);
}

export function useResMenu(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["resmenu", id],

    queryFn: () => getRes(id),
  });

  return { data, isLoading };
}

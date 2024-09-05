import { useState } from "react";
import useQueryParams from "./useQueryParams";

const useLatestTrailerTab = (tab: string) => {
  const [queryParams,setQueryParams] = useQueryParams();
  const currentParam = queryParams["trailer"];
  const [currentTab, setcurrenttab] = useState<string>(currentParam || tab);
  const setCurrentTab = (value: string) => {
    setcurrenttab(value);
    setQueryParams({trailer:value === "Popular" ? 'popular' : 'top_rated'})
  };
  return [currentTab, setCurrentTab] as const;
};

export default useLatestTrailerTab;

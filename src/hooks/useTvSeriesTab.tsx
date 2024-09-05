import { useState } from "react";
import useQueryParams from "./useQueryParams";

const useTvSeriesTab = (tab: string) => {
  const [queryParams,setQueryParams] = useQueryParams();
  const currentParam = queryParams["series"];
  const [currentTab, setcurrenttab] = useState<string>(currentParam || tab);
  const setCurrentTab = (value: string) => {
    setcurrenttab(value);
    setQueryParams({series:value === "Popular" ? 'popular' : ''})
  };
  return [currentTab, setCurrentTab] as const;
};

export default useTvSeriesTab;

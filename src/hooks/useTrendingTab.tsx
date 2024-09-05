import { useState } from "react";
import useQueryParams from "./useQueryParams";

const useTrendingTab = (tab: string) => {
  const [queryParams,setQueryParams] = useQueryParams();
  const currentParam = queryParams["trending"];
  const [currentTab, setcurrenttab] = useState<string>(currentParam || tab);
  const setCurrentTab = (value: string) => {
    setcurrenttab(value);
    setQueryParams({trending:value === "Today" ? 'day' : 'week'})
  };
  return [currentTab, setCurrentTab] as const;
};

export default useTrendingTab;

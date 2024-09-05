import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryParams = () => {
  const [queryParam, setQueryParam] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);

  useEffect(()=>{
    setSearchParams((prev)=>({
        ...Object.fromEntries([...prev]),
        ...queryParam
    }))
  },[queryParam,setSearchParams])
  return [queryParams, setQueryParam] as const;
};

export default useQueryParams;

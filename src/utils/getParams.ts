const getParams = ({ tab, query }: ApiParams): URLSearchParams => {
  const params = new URLSearchParams();
  if (tab) {
    params.set("tab", tab);
  }
  if (query) {
    params.set("query", query);
  }
  return params;
};

export default getParams;

import { useSWRInfinite } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc";

export const usePaginateCoins = (path) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + path;
  const PAGE_LIMIT = 10;

  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `${url}&per_page=${PAGE_LIMIT}&page=${
        index + 1
      }&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d`,
    fetcher
  );

  const coins = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_LIMIT);

  return { coins, error, isLoadingMore, size, setSize, isReachingEnd };
};

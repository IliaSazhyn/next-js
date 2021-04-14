import Coins from "./Coins";
import { usePaginateCoins } from "../components/useRequest";

export default function CoinList({ filteredCoins }) {
  const {
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = usePaginateCoins("/coins");

  if (error) return <h1>Something went wrong!</h1>;
  if (!filteredCoins) return <h1>Loading...</h1>;

  return (
    <>
      {filteredCoins.map((coin) => (
        <Coins
          key={coin.id}
          name={coin.name}
          id={coin.id}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          volume={coin.total_volume}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      ))}
      <button
        className="coin_button"
        disabled={isLoadingMore || isReachingEnd}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? "Loading..."
          : isReachingEnd
          ? "No more posts"
          : "Load more"}
      </button>

    </>
  );
}

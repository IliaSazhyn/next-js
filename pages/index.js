import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";
import CoinList from "../components/CoinList";
import { usePaginateCoins } from "../components/useRequest";

export default function Home() {
  const { coins } = usePaginateCoins("/coins");
  const [search, setSearch] = useState("");
  const allCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />
      </div>
    </Layout>
  );
}


import Layout from "../../components/Layout";
import styles from "./Coin.module.css";

const Coin = ({ coin }) => {
  console.log(coin)
  return (
<Layout>
  <div className={styles.coin_page}>
    <div className={styles.coin_container}>
     <img
     src={coin.image.large}
     alt={coin.name}
     className={styles.coin_image}
      />
      <h1 className={styles.coin_name}>{coin.name}</h1>
      <p className={styles.coin_symbol}>{coin.symbol}</p>
      <p className={styles.coin_current}>Price: {coin.market_data.current_price.usd}</p>
      <p className={styles.coin_24h}>Day Change: {coin.market_data.price_change_percentage_24h}%</p>
      <p className={styles.coin_24h}>Week Change: {coin.market_data.price_change_percentage_7d}%</p>
      <p className={styles.coin_24h}>Month Change: {coin.market_data.price_change_percentage_30d}%</p>
    </div>
  </div>
</Layout>
  )
}

export default Coin;

export async function getServerSideProps(context) {
  const {id} = context.query

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

  const data = await res.json()

  return {
    props: {
      coin: data
    }
  }
}

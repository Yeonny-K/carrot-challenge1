import Billionary from "../components/billionary";
import styles from "../styles/home.module.css"

const api_uri = "https://billions-api.nomadcoders.workers.dev/";

export default async function Home() {
  const billionaries = await getBillionaries()
  return (
    <main className="">
      <div className={styles.container}>

      {billionaries.map((billionary) => (
        <Billionary
          id={billionary.id}
          name={billionary.name}
          squareImage={billionary.squareImage}
          netWorth={billionary.netWorth}
          industries={billionary.industries}
        />
      ))}
      </div>
    </main>
  );
}

// make async function to get data from api
async function getBillionaries() {
  const response = await fetch(api_uri);
  const data = await response.json();
  return data;
}
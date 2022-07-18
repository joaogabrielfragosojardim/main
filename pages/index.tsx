import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Cart } from "../components/cart";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>product-preview-card</title>
        <meta name="description" content="Just a study project" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,700&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap');
        </style>
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.imageSide}>
            <Image
              src={"/product-image.jpg"}
              alt="perfume image"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className={styles.textSide}>
            <h3>PERFUME</h3>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div>
              <h2>$149.99</h2>
              <span>$169.99</span>
            </div>
            <button>
              <div className={styles.svg}>
                <Cart width="15px" height="15px" fill="white" />
              </div>
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

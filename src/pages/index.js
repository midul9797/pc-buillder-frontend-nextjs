import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllProducts from "@/components/UI/AllProducts";

import dynamic from "next/dynamic";

const HomePage = ({ allProducts }) => {
  const DynamicBanner = dynamic(() => import("@/components/UI/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });

  return (
    <>
      <Head>
        <title>PC Builder</title>
        <meta
          name="description"
          content="This is PC building site made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <AllProducts allProducts={allProducts} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch(
    "https://pc-builder-backend-lac.vercel.app/api/v1/products?limit=8&page=1"
  ); // --> json server
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allProducts: data.data,
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};

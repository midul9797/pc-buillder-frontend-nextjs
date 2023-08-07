import RootLayout from "@/components/Layouts/RootLayout";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  addCasing,
  addMonitor,
  addMotherboard,
  addOthers,
  addPowerSupply,
  addProcessor,
  addRAM,
  addStorage,
} from "../../redux/features/pc-builderSlice";
import { useRouter } from "next/router";
const CategoryBasedProducts = ({ products, category }) => {
  const { Meta } = Card;
  const router = useRouter();
  const dispatch = useAppDispatch();
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        {category === "Others" ? "Accessories" : `${category}s`}
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        style={{ padding: "20px" }}
      >
        {products?.map((product) => (
          <Col
            key={product._id}
            className="gutter-row"
            span={6}
            style={{ marginTop: "24px" }}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={product?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="product image"
                />
              }
            >
              <Meta title={product?.name} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0px",
                    fontSize: "16px",
                  }}
                >
                  <span>{product?.category}</span>
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {product?.price} &#2547;
                  </span>
                </p>
                {product?.stock_status === "In Stock" ? (
                  <p
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {product.stock_status}
                  </p>
                ) : (
                  <p
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {product.stock_status}
                  </p>
                )}
                <Rate disabled allowHalf defaultValue={product?.rating} />
                <Button
                  style={{
                    marginTop: "15px",
                  }}
                  type="default"
                  onClick={() => {
                    if (product.category === "Processor")
                      dispatch(addProcessor(product));
                    else if (product.category === "Motherboard")
                      dispatch(addMotherboard(product));
                    else if (product.category === "Power Supply")
                      dispatch(addPowerSupply(product));
                    else if (product.category === "Casing")
                      dispatch(addCasing(product));
                    else if (product.category === "RAM")
                      dispatch(addRAM(product));
                    else if (product.category === "Monitor")
                      dispatch(addMonitor(product));
                    else if (product.category === "Others")
                      dispatch(addOthers(product));
                    else dispatch(addStorage(product));

                    router.push("/pc-builder");
                  }}
                >
                  Add
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export const getStaticPaths = async () => {
  const categories = [
    "Processor",
    "Motherboard",
    "RAM",
    "Storage",
    "Power Supply",
    "Monitor",
    "Others",
    "Casing",
  ];

  const paths = categories?.map((category) => ({
    params: { category: category },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-backend-lac.vercel.app/api/v1/products?category=${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
      category: params.category,
    },
  };
};
export default CategoryBasedProducts;

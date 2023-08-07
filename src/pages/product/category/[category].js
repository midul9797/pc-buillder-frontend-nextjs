import { Button, Card, Col, Rate, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";

const CategoryBasedProducts = ({ products, category }) => {
  const { Meta } = Card;

  return (
    <RootLayout>
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
              </div>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}
                href={`/product/${product?._id}`}
              >
                <Button type="dashed" size="large">
                  Details <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </RootLayout>
  );
};
export const getStaticPaths = async () => {
  const categories = [
    "Processor",
    "Motherboard",
    "RAM",
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

import { Avatar, Col, List, Rate, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetailPage = ({ product }) => {
  const keys = Object.keys(product?.keyFeatures);

  return (
    <>
      <Row style={{ marginTop: "60px", padding: "20px", alignItems: "center" }}>
        <Col sm={4} md={6} lg={12}>
          <Image
            alt="example"
            src={product?.image}
            width={500}
            height={300}
            responsive
          />
        </Col>
        <Col sm={4} md={6} lg={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{product?.name}</h1>
          <span
            style={{
              color: "gray",
              display: "block",
              fontSize: "20px",
              paddingTop: "10px",
            }}
          >
            {product?.category}
          </span>
          <Rate disabled allowHalf defaultValue={product?.rating} />
          <span
            style={{ fontSize: "18px", padding: "20px", fontWeight: "bold" }}
          >
            {product.rating}
          </span>
          <div
            className="line"
            style={{
              height: "1px",
              margin: "20px 0",
              background: "#fff",
              width: "100%",
            }}
          ></div>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              fontWeight: "lighter",
              margin: "20px",
            }}
          >
            {product?.description}
          </p>
          <h3>Key Features : </h3>
          <ul>
            {keys.map((key) => (
              <li
                key={key}
                style={{
                  listStyle: "inside",
                  fontSize: "16px",
                  padding: "10px",
                }}
              >
                {key} : {product?.keyFeatures[key]}
              </li>
            ))}
          </ul>
          <span
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              margin: " 130px",
            }}
          >
            {product?.price}&#2547;
          </span>
        </Col>
      </Row>
      <List
        style={{ padding: "20px" }}
        itemLayout="horizontal"
        dataSource={product.reviews}
        renderItem={(item, index) => (
          <List.Item style={{ color: "white" }}>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<Rate allowHalf disabled defaultValue={item.rating} />}
              description={item.message}
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-backend-lac.vercel.app/api/v1/products"
  );
  const products = await res.json();

  const paths = products.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-backend-lac.vercel.app/api/v1/products/${params.productId}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: {
      product: data.data,
    },
  };
};

import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
const { Header, Content, Footer } = Layout;

import Link from "next/link";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();

  const items = [
    {
      key: "1",
      label: <Link href="/product/category/Processor">Processor</Link>,
    },
    {
      key: "2",
      label: <Link href="/product/category/Motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/product/category/RAM">RAM</Link>,
    },
    {
      key: "4",
      label: <Link href="/product/category/Power Supply">Power Supply</Link>,
    },
    {
      key: "5",
      label: <Link href="/product/category/Storage">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/product/category/Monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="/product/category/Casing">Casing</Link>,
    },
    {
      key: "8",
      label: <Link href="/product/category/Others">Others</Link>,
    },
  ];
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>
            <Link
              href="/"
              style={{
                color: "hsl(186 100% 69%)",
              }}
            >
              PH_PC BUILDER
            </Link>
          </h1>
        </div>
        <div>
          <Link href="/pc-builder" style={{ padding: "20px" }}>
            PC Builder
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <a href="javascript:void(0)" style={{ padding: "20px" }}>
              Category
            </a>
          </Dropdown>

          {session?.user ? (
            <>
              <span style={{ padding: "10px" }}>{session?.user?.name}</span>
              <Button type="text" size="large" onClick={() => signOut()}>
                LogOut
              </Button>
            </>
          ) : (
            <Link href={"/login"}>
              <Button type="text" size="large">
                LogIn
              </Button>
            </Link>
          )}
        </div>
      </Header>

      <Content
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PH-PC BUILDER
        </h2>
        <p>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC BUILDER ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;

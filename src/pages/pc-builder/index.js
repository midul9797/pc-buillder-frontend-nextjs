import { Button, Card, Layout, notification } from "antd";
const { Header } = Layout;
import Image from "next/image";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  removeAll,
  removeCasing,
  removeMonitor,
  removeMotherboard,
  removeOthers,
  removePowerSupply,
  removeProcessor,
  removeRAM,
  removeStorage,
} from "../../redux/features/pc-builderSlice";
import { useState } from "react";

const PCBuilder = () => {
  const [submit, setSubmit] = useState(false);
  const {
    processor,
    motherboard,
    casing,
    powerSupply,
    monitor,
    others,
    ram,
    storage,
    total,
    required,
  } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Submitted Successfully`,
      description: `Total cost will be ${total} TK`,
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 11111,
          padding: "20px",
          width: "100%",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ffffff2b",
        }}
      >
        <h1>
          <Link
            href="/"
            style={{
              color: "white",
            }}
          >
            PH_PC BUILDER
          </Link>
        </h1>
        <span
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            paddingRight: "10vw",
          }}
        >
          Total: {total} &#2547;
        </span>
      </div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "100px 0px",
        }}
      >
        PC Builder
      </h1>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="Processor"
          extra={
            <div
              style={{
                width: "calc(80vw - 150px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#cd0000", fontWeight: "bold" }}>
                (Required)
              </span>
              {Object.keys(processor).length !== 0 ? (
                <></>
              ) : (
                <Link href={"/pc-builder/Processor"}>
                  <Button type="default">Choose</Button>
                </Link>
              )}
            </div>
          }
          loading={false}
        >
          {Object.keys(processor).length !== 0 ? (
            <div
              key={processor._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image
                src={processor?.image}
                alt="processor"
                width={50}
                height={50}
              />
              <h3 style={{ color: "gray" }}>{processor?.name}</h3>
              <h2>{processor?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removeProcessor(processor))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="Motherboard"
          extra={
            <div
              style={{
                width: "calc(80vw - 150px)",
                display: "flex",

                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#cd0000", fontWeight: "bold" }}>
                (Required)
              </span>
              {Object.keys(motherboard).length !== 0 ? (
                <></>
              ) : (
                <Link href={"/pc-builder/Motherboard"}>
                  <Button type="default">Choose</Button>
                </Link>
              )}
            </div>
          }
        >
          {Object.keys(motherboard).length !== 0 ? (
            <div
              key={motherboard._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image
                src={motherboard?.image}
                alt="motherboard"
                width={50}
                height={50}
              />
              <h3 style={{ color: "gray" }}>{motherboard?.name}</h3>
              <h2>{motherboard?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removeMotherboard(motherboard))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="Power Supply"
          extra={
            <div
              style={{
                width: "calc(80vw - 150px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#cd0000", fontWeight: "bold" }}>
                (Required)
              </span>
              {Object.keys(powerSupply).length !== 0 ? (
                <></>
              ) : (
                <Link href={"/pc-builder/Power Supply"}>
                  <Button>Choose</Button>
                </Link>
              )}
            </div>
          }
        >
          {Object.keys(powerSupply).length !== 0 ? (
            <div
              key={powerSupply._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image
                src={powerSupply?.image}
                alt="processor"
                width={50}
                height={50}
              />
              <h3 style={{ color: "gray" }}>{powerSupply?.name}</h3>
              <h2>{powerSupply?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removePowerSupply(powerSupply))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="RAM"
          extra={
            <div
              style={{
                width: "calc(80vw - 150px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#cd0000", fontWeight: "bold" }}>
                (Required)
              </span>
              {Object.keys(ram).length !== 0 ? (
                <></>
              ) : (
                <Link href={"/pc-builder/RAM"}>
                  <Button>Choose</Button>
                </Link>
              )}
            </div>
          }
        >
          {Object.keys(ram).length !== 0 ? (
            <div
              key={ram._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image src={ram?.image} alt="processor" width={50} height={50} />
              <h3 style={{ color: "gray" }}>{ram?.name}</h3>
              <h2>{processor?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removeRAM(ram))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="Storage"
          extra={
            <div
              style={{
                width: "calc(80vw - 150px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#cd0000", fontWeight: "bold" }}>
                (Required)
              </span>
              {Object.keys(storage).length !== 0 ? (
                <></>
              ) : (
                <Link href={"/pc-builder/Storage"}>
                  <Button>Choose</Button>
                </Link>
              )}
            </div>
          }
        >
          {Object.keys(storage).length !== 0 ? (
            <div
              key={storage._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image
                src={storage?.image}
                alt="processor"
                width={50}
                height={50}
              />
              <h3 style={{ color: "gray" }}>{storage?.name}</h3>
              <h2>{storage?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removeStorage(storage))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="Casing"
          extra={
            <div
              style={{
                width: "calc(80vw - 150px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ color: "#cd0000", fontWeight: "bold" }}>
                (Required)
              </span>
              {Object.keys(casing).length !== 0 ? (
                <></>
              ) : (
                <Link href={"/pc-builder/Casing"}>
                  <Button>Choose</Button>
                </Link>
              )}
            </div>
          }
        >
          {Object.keys(casing).length !== 0 ? (
            <div
              key={casing._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image
                src={casing?.image}
                alt="processor"
                width={50}
                height={50}
              />
              <h3 style={{ color: "gray" }}>{casing?.name}</h3>
              <h2>{casing?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removeCasing(casing))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          style={{ margin: "20px", width: "80vw", height: "130px" }}
          type="inner"
          title="Monitor"
          extra={
            Object.keys(monitor).length !== 0 ? (
              <></>
            ) : (
              <Link href={"/pc-builder/Monitor"}>
                <Button>Choose</Button>
              </Link>
            )
          }
        >
          {Object.keys(monitor).length !== 0 ? (
            <div
              key={monitor._id}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Image
                src={monitor?.image}
                alt="processor"
                width={50}
                height={50}
              />
              <h3 style={{ color: "gray" }}>{monitor?.name}</h3>
              <h2>{monitor?.price} &#2547;</h2>
              <Button
                type="text"
                danger
                onClick={() => dispatch(removeMonitor(monitor))}
              >
                <CloseOutlined />
              </Button>
            </div>
          ) : (
            <></>
          )}
        </Card>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Card
          title="Others"
          style={{ width: "80vw", margin: "20px" }}
          extra={
            <Link href={"/pc-builder/Others"}>
              <Button>Choose</Button>
            </Link>
          }
        >
          {others?.map((product) => (
            <Card
              key={product._id}
              style={{
                marginTop: 16,
              }}
              type="inner"
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Image
                  src={product?.image}
                  alt="processor"
                  width={50}
                  height={50}
                />
                <h3 style={{ color: "gray" }}>{product?.name}</h3>
                <h2>{product?.price} &#2547;</h2>
                <Button
                  type="text"
                  danger
                  onClick={() => dispatch(removeOthers(product))}
                >
                  <CloseOutlined />
                </Button>
              </div>
            </Card>
          ))}
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "80vw",
        }}
      >
        <Button
          size="large"
          type="primary"
          disabled={required === 6 ? false : true}
          style={{
            margin: "20px",
          }}
          onClick={() => {
            dispatch(removeAll());

            openNotification("bottom");
          }}
          icon={<CheckOutlined />}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default PCBuilder;

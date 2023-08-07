import "@/styles/globals.css";
import { ConfigProvider, theme } from "antd";
import { purple } from "@ant-design/colors";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={pageProps.session}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <Provider store={store}>
          {getLayout(<Component {...pageProps} />)}
        </Provider>
      </ConfigProvider>
    </SessionProvider>
  );
}

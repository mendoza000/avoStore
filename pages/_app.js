// import App from 'next/app'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "@components/layaout/Layout";
import "@styles/styles.scss";
import "animate.css";

// export function reportWebVitals(metric) {
//   // These metrics can be sent to any analytics service
//   console.log(metric);
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;

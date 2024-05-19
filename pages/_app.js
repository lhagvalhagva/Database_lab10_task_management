// pages/_app.js
import "../styles/global.css"; // Adjust the file path if needed

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

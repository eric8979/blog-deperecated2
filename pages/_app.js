import Nav from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-screen h-screen">
        <Nav />
        <main className="h-max">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

import Nav from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;

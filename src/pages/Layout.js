import Footer from "../layouts/Footer";
import Head from "../layouts/Head";

export default function Layout({ children }) {
  return (
    <div className="page-layouts">
      <Head />
      <div className="layout-content-body">{children}</div>
      <Footer />
    </div>
  );
}

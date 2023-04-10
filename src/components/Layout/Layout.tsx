import Navbar from "@/components/Navbar/Navbar";
// import Footer from "./footer";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}

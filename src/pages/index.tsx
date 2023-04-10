import { Inter } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import Home from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <main className={`${inter.className}`}>
      <Home />
    </main>
  );
}

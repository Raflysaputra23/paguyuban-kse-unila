import { Fragment } from "react";
import Home from "@/components/ui/home";
import About from "@/components/ui/about";
import Bidang from "@/components/ui/bidang";



export default function HomePage() {
  return (
    <Fragment>
      <Home />
      <About />
      <Bidang />
    </Fragment>
  );
}

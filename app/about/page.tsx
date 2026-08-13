import Welcome from "../_components/welcome";
import Header from "../_components/header";
import About from "../_components/about";
import Spinsmile from "../_components/spinsmile";
import Abouttext from "../_components/abouttext";

export default function Home() {
  return (
    <>
        <Header />
        <About />
        <Abouttext />
      <Spinsmile />
    </>
  );
}

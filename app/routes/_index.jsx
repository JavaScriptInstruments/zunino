import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Photo from "../components/Photos";
import Form from "../components/Form";

export default function Index() {
  return (
    <div>
      <Nav title="Home Page"></Nav>
      <Hero />
      <About />
      <Photo />
      <Form />
      <Footer />
    </div>
  );
}

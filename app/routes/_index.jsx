import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Photo from "../components/Photos";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import { getArtworkTypes } from "../lib/WordPressService";

export default function Index() {
  const [artworkTypes, setArtworkTypes] = useState([]);

  useEffect(() => {
    const fetchArtworkTypes = async () => {
      const types = await getArtworkTypes();
      setArtworkTypes(types);
    };

    fetchArtworkTypes();
  }, []);

  const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

  const navDynamic = [
    { name: "Home", href: "/", current: true },
    { name: "Drawings", href: `/artwork/${'Drawings'}`, current: false },
    { name: "Paintings", href: `/artwork/${'Paintings'}`, current: false },
    { name: "Prints", href: `/artwork/${'Prints'}`, current: false },
    //...artworkTypes.map((type) => ({ name: capitalize(type), href: `/artwork/${capitalize(type)}`, current: false })),
    { name: "CV", href: "/CV", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];

  return (
    <div>
      <Nav title="Home" navigation={navDynamic}></Nav>
      <Hero />
      <About />
      <Photo />
      <Form />
      <Footer />
    </div>
  );
}

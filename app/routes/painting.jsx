import { useLoaderData } from "@remix-run/react";
import Nav from "../components/Nav";
import Painting from "../components/Painting";
import { getPaintings } from "../lib/WordPressService";

export async function loader() {
    return await getPaintings();
  }

export default function Paintings() {
    const paintings = useLoaderData();

    return (
        <div>
            <Nav title="Home Page"></Nav>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
            {paintings.map((painting) => {
                return <Painting painting={painting} key={painting.name}></Painting>;
            })}
            </div>
        </div>
    );
  }
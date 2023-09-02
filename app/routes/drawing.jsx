import { useLoaderData } from "@remix-run/react";
import Nav from "../components/Nav";
import Drawing from "../components/Drawing";
import { getDrawings } from "../lib/WordPressService";

export async function loader() {
    return await getDrawings();
  }

export default function Drawings() {
    const drawings = useLoaderData();

    return (
        <div>
            <Nav title="Home Page"></Nav>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
            {drawings.map((drawing) => {
                return <Drawing drawing={drawing} key={drawing.name}></Drawing>;
            })}
            </div>
        </div>
    );
  }
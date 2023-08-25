import Painting from "../components/Painting";
import Print from "../components/Print";
import Drawing from "../components/Drawing";
import Header from "../components/Header";
import { useLoaderData } from "@remix-run/react";
import { getPaintings } from "../lib/WordPressService";
import { getPrints } from "../lib/WordPressService";
import { getDrawings } from "../lib/WordPressService";

export async function loader() {
  const [paintings, prints, drawings] = await Promise.all([
    getPaintings(),
    getPrints(),
    getDrawings(),
  ]);

  return {
    paintings,
    prints,
    drawings,
  };
}

export default function Index() {
  const {paintings, prints, drawings} = useLoaderData();

  return (
    <div>
      <Header title="Home Page"></Header>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        {paintings.map((painting) => {
          return <Painting painting={painting} key={painting.name}></Painting>;
        })}
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        {prints.map((print) => {
          return <Print print={print} key={print.name}></Print>;
        })}
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        {drawings.map((drawing) => {
          return <Drawing drawing={drawing} key={drawing.name}></Drawing>;
        })}
      </div>
    </div>
  );
}

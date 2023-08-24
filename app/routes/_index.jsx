import Painting from "../components/Painting";
import Header from "../components/Header";
import { useLoaderData } from "@remix-run/react";
import { getPaintings } from "../lib/WordPressService";

export async function loader() {
  return await getPaintings();
}

export default function Index() {
  const paintings = useLoaderData();
  return (
    <div>
      <Header title="Home Page"></Header>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        {paintings.map((painting) => {
          return <Painting painting={painting} key={painting.name}></Painting>;
        })}
      </div>
    </div>
  );
}

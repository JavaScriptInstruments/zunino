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
      <Nav title="Drawing"></Nav>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
            Drawings{" "}
          </h1>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {drawings.map((drawing) => {
              return (
                <a key={drawing.name} className="group ">
                  <div className="aspect-h-1 h-full w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-5 xl:aspect-w-7 ">
                    <Drawing drawing={drawing} key={drawing.name}></Drawing>
                  </div>
                  <h2 className="mt-2 text-sm text-gray-700">{drawing.name}</h2>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

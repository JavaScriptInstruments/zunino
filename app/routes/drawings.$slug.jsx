// import Drawing from "../components/Painting";
import Nav from "../components/Nav";
import { useLoaderData } from "@remix-run/react";
import { getDrawingBySlug } from "../lib/WordPressService";

export async function loader({ params }) {
  const slug = params.slug;
  return await getDrawingBySlug(slug);
}

export default function Index() {
  const drawing = useLoaderData();
  return (
    <div>
      <Nav title="Home Page"></Nav>
      <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{drawing.name}</h1>
        {/* <div>{drawing.photo.altText}</div> */}
      </div>
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <img src={drawing.photo.sourceUrl} className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
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
      <img
        src={drawing.slug.sourceUrl}
        className="h-full object-auto object-center group-hover:opacity-75"
      />
    </div>
  );
}

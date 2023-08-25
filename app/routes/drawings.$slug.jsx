// import Drawing from "../components/Painting";
import Header from "../components/Header";
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
      <Header title="Home Page"></Header>
      <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{drawing.name}</h1>
        {/* <div>{drawing.photo.altText}</div> */}
        <div>{drawing.description}</div>
      </div>
    </div>
  );
}

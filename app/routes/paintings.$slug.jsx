// import Painting from "../components/Painting";
import Nav from "../components/Nav";
import { useLoaderData } from "@remix-run/react";
import { getPaintingBySlug } from "../lib/WordPressService";

export async function loader({ params }) {
  const slug = params.slug;
  return await getPaintingBySlug(slug);
}

export default function Index() {
  const painting = useLoaderData();
  return (
    <div>
      <Nav title="Home Page"></Nav>
      <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{painting.name}</h1>
        {/* <div>{painting.photo.altText}</div> */}
        <div>{painting.description}</div>
      </div>
    </div>
  );
}

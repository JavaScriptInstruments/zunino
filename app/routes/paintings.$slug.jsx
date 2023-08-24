// import Painting from "../components/Painting";
import Header from "../components/Header";
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
      <Header title="Home Page"></Header>
      <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{painting.name}</h1>
        {/* <div>{painting.photo.altText}</div> */}
        <div>{painting.description}</div>
      </div>
    </div>
  );
}

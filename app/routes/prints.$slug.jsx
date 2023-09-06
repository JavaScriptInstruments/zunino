// import Print from "../components/Print";
import Nav from "../components/Nav";
import { useLoaderData } from "@remix-run/react";
import { getPrintBySlug } from "../lib/WordPressService";

export async function loader({ params }) {
  const slug = params.slug;
  return await getPrintBySlug(slug);
}

export default function Index() {
  const print = useLoaderData();
  return (
    <div>
      <Nav title="Home Page"></Nav>
      <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{print.name}</h1>
        {/* <div>{print.photo.altText}</div> */}
      </div>
      <img
        src={print.photo.sourceUrl}
        className="h-full object-auto object-center group-hover:opacity-75"
      />
    </div>
  );
}
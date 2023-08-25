// import Print from "../components/Print";
import Header from "../components/Header";
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
      <Header title="Home Page"></Header>
      <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{print.name}</h1>
        {/* <div>{print.photo.altText}</div> */}
        <div>{print.description}</div>
      </div>
    </div>
  );
}

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
  
  const stats = [
    { label: painting.yearPainted, value: "Year" },
    { label: painting.type, value: "Type" },
    { label: painting.dimensions, value: "Dimensions" },
  ];

  return (
    <div>
      <Nav title="Home Page"></Nav>
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-4 lg:row-end-1 flex items-center justify-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={painting.photo.sourceUrl}
                  // alt={product.imageAlt}
                  className="max-h-screen max-w-full object-contain object-center"
                />
              </div>
            </div>

            {/* Product details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    {painting.title}
                  </h1>

                  <p className="mt-2 text-sm text-gray-500 mb-8">
                    {}
                  </p>

                  <div className="lg:flex lg:flex-auto lg:justify-center">
                    <dl className="w-64 space-y-8 xl:w-80">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex flex-col-reverse gap-y-4"
                        >
                          <dt className="text-base leading-7 text-gray-600">
                            {stat.label}
                          </dt>
                          <dd className="text-3xl font-semibold tracking-tight text-gray-900">
                            {stat.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* You can add any additional product details here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
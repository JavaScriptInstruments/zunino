// import Drawing from "../components/Painting";
import Nav from "../components/Nav";
import { useLoaderData } from "@remix-run/react";
import { getDrawingBySlug } from "../lib/WordPressService";

export async function loader({ params }) {
  const slug = params.slug;
  return await getDrawingBySlug(slug);
}
import { Fragment } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";

export default function Index() {
  const product = {
    name: "Application UI Icon Pack",
    version: { name: "Genre/Style: Minimalism" },
    price: "$220",
    description:
      "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg",
    imageAlt:
      "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
  };

  const stats = [
    { label: "2002", value: "Year Painted" },
    { label: "Oil on canvas", value: "Type" },
    { label: "500 x 750", value: "Dimensions" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const drawing = useLoaderData();
  return (
    <div>
      <Nav title="Home Page"></Nav>
      {/* <div className="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
        <h1>{drawing.name}</h1>
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
      </div> */}
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
            {/* Product image */}
            <div className="lg:col-span-4 lg:row-end-1">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={drawing.photo.sourceUrl}
                  // alt={product.imageAlt}
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Product details */}
            <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
              <div className="flex flex-col-reverse">
                <div className="mt-4">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {drawing.name}
                  </h1>

                  <h2 id="information-heading" className="sr-only">
                    Product information
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 mb-20">
                    {product.version.name}
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
                          <dd className="text-5xl font-semibold tracking-tight text-gray-900">
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

// import { Fragment } from 'react'
// import { StarIcon } from '@heroicons/react/20/solid'
// import { Tab } from '@headlessui/react'

// const product = {
//   name: 'Application UI Icon Pack',
//   version: { name: '1.0', date: 'June 5, 2021', datetime: '2021-06-05' },
//   price: '$220',
//   description:
//     'The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.',
//   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg',
//   imageAlt: 'Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.',
// }

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         {/* Product */}
//         <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
//           {/* Product image */}
//           <div className="lg:col-span-4 lg:row-end-1">
//             <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
//               <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
//             </div>
//           </div>

//           {/* Product details */}
//           <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
//             <div className="flex flex-col-reverse">
//               <div className="mt-4">
//                 <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>

//                 <h2 id="information-heading" className="sr-only">
//                   Product information
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-500">
//                   Version {product.version.name} (Updated{' '}
//                   <time dateTime={product.version.datetime}>{product.version.date}</time>)
//                 </p>
//               </div>

//               {/* You can add any additional product details here */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

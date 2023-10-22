import Nav from "../components/Nav";
import { useLoaderData } from "@remix-run/react";
import { getArtworkBySlug } from "../lib/WordPressService";

export async function loader({ params }) {
  const slug = params.slug;
  return await getArtworkBySlug(slug);
}

export default function Index() {
  const artwork = useLoaderData();
  
  const stats = [
    { label: artwork.yearProduced, value: "Year" },
    { label: artwork.artworkType, value: "Type" },
    { label: artwork.dimensions, value: "Dimensions" },
  ];

  return (
    <div>
      <Nav title="Home Page"></Nav>
      <div className="bg-white">
        <h1 className="px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 text-4xl font-bold tracking-tight text-gray-900">
          {artwork.artworkTitle}
        </h1>
        <div className="mx-auto">
          <div className="lg:col-span-4 lg:row-end-1 flex items-center justify-center">
            <div className="overflow-hidden rounded-lg">
              <img
                  src={artwork.image.sourceUrl}
                  className="max-h-screen max-w-full object-contain object-center"
                />
            </div>
          </div>
        
          <div>
            <div className="px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 text-4xl tracking-tight text-gray-900">
              <h2 className = "font-bold">Year:</h2> 
              <span className = "text-base leading-7 text-gray-600"> {artwork.yearProduced} </span>
            </div>
            <div className="px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 text-4xl tracking-tight text-gray-900">
              <h2 className = "font-bold">Dimensions:</h2> 
              <span className = "text-base leading-7 text-gray-600"> {artwork.dimensions} </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )

  // return (
  //   <div>
  //     <Nav title="Home Page"></Nav>
  //     <div className="bg-white">
  //       <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //         {/* Product */}
  //         <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
  //           {/* Product image */}
  //           <div className="lg:col-span-4 lg:row-end-1 flex items-center justify-center">
  //             <div className="overflow-hidden rounded-lg">
  //               <img
  //                 src={artwork.image.sourceUrl}
  //                 className="max-h-screen max-w-full object-contain object-center"
  //               />
  //             </div>
  //           </div>

  //           {/* Product details */}
            // <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            //   <div className="flex flex-col-reverse">
            //     <div className="mt-4">
            //       <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            //         {artwork.artworkTitle}
            //       </h1>

            //       <p className="mt-2 text-sm text-gray-500 mb-8">
            //         {}
            //       </p>

            //       <div className="lg:flex lg:flex-auto lg:justify-center">
            //         <dl className="w-64 space-y-8 xl:w-80">
            //           {stats.map((stat) => (
            //             <div
            //               key={stat.label}
            //               className="flex flex-col-reverse gap-y-4"
            //             >
            //               <dt className="text-base leading-7 text-gray-600">
            //                 {stat.label}
            //               </dt>
            //               <dd className="text-3xl font-semibold tracking-tight text-gray-900">
            //                 {stat.value}
            //               </dd>
            //             </div>
            //           ))}
            //         </dl>
            //       </div>
            //     </div>

            //     {/* You can add any additional product details here */}
            //   </div>
            // </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
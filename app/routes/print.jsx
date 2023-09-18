import { useLoaderData } from "@remix-run/react";
import Nav from "../components/Nav";
import Print from "../components/Print";
import Footer from "../components/Footer";
import { getPrints } from "../lib/WordPressService";

export async function loader() {
    return await getPrints();
  }

export default function Prints() {
    const prints = useLoaderData();

    return (
        <div>
          <Nav title="Print"></Nav>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
                Prints{" "}
              </h1>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {prints.map((print) => {
                  return (
                    <a key={print.name} className="group ">
                      <div className="h-full w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-5 aspect-w-7 ">
                        <Print print={print} key={print.name}></Print>
                      </div>
                      <h2 className="mt-2 text-sm text-gray-700">{print.name}</h2>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
    
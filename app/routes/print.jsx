import { useLoaderData } from "@remix-run/react";
import Nav from "../components/Nav";
import Print from "../components/Print";
import { getPrints } from "../lib/WordPressService";

export async function loader() {
    return await getPrints();
  }

export default function Prints() {
    const prints = useLoaderData();

    return (
        <div>
            <Nav title="Home Page"></Nav>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
            {prints.map((print) => {
                return <Print print={print} key={print.name}></Print>;
            })}
            </div>
        </div>
    );
  }
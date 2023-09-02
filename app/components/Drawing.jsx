import { Link } from "@remix-run/react";

export default function Drawing({ drawing }) {
  return (
    <Link prefetch="render" to={`/drawings/${drawing.slug}`}>
      <div
        className="flex
            items-center
            bg-gradient-to-r
            p-8
            rounded-lg
            text-black
            transition-all
            hover:-translate-y-1
            hover:scale-105"
      >
        <div>
          <img src={drawing.photo.sourceUrl} />
          <h2 className="font-semibold text-2xl">{drawing.name}</h2>
        </div>
      </div>
    </Link>
  );
}

import { Link } from "@remix-run/react";

export default function Drawing({ drawing }) {
  return (
    <Link prefetch="render" to={`/prints/${drawing.slug}`}>
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
          <h2 className="font-semibold text-2xl">{drawing.name}</h2>
          <img src={drawing.photo.sourceUrl} />
        </div>
      </div>
    </Link>
  );
}
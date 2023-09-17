import { Link } from "@remix-run/react";

export default function Drawing({ drawing }) {
  return (
    <Link prefetch="render" to={`/drawings/${drawing.slug}`}>
      <div className="relative">
        <div className="h-full">
          <img
            src={drawing.thumbnail.sourceUrl}
            className="object-auto object-center group-hover:opacity-75"
          />
        </div>
      </div>
    </Link>
  );
}

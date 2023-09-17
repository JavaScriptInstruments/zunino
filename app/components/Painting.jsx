import { Link } from "@remix-run/react";

export default function Painting({ painting }) {
  return (
    <Link prefetch="render" to={`/paintings/${painting.slug}`}>
      <div className="relative">
        <div className="h-full">
          <img
            src={painting.thumbnail.sourceUrl}
            className="object-auto object-center group-hover:opacity-75"
          />
        </div>
      </div>
    </Link>
  );
}

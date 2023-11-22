import { Link } from "@remix-run/react";

export default function Artwork({ artwork }) {
  return (
    <Link prefetch="render" to={`/artworks/${artwork.slug}`}>
      <div className="relative">
        <div className="h-full">
          <img
            src={artwork.thumbnail.sourceUrl}
            className="object-auto object-center group-hover:opacity-75"
          />
        </div>
      </div>
    </Link>
  );
}

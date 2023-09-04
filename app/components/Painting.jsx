import { Link } from "@remix-run/react";

export default function Painting({ painting }) {
  return (
    <Link prefetch="render" to={`/paintings/${painting.slug}`}>
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
        <div c>
          <img src={painting.photo.sourceUrl} />
          <h2 className="font-semibold text-2xl">{painting.name}</h2>
        </div>
      </div>
    </Link>
  );
}

import { Link } from "@remix-run/react";

export default function Print({ print }) {
  return (
    <Link prefetch="render" to={`/prints/${print.slug}`}>
      <div className="relative">
        <div className="h-full">
          <img
            src={print.photo.sourceUrl}
            className="object-auto object-center group-hover:opacity-75"
          />
        </div>
      </div>
    </Link>
  );
}

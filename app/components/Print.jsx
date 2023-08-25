import { Link } from "@remix-run/react";

export default function Print({ print }) {
  return (
    <Link prefetch="render" to={`/prints/${print.slug}`}>
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
          <img src={print.photo.sourceUrl} />
          <h2 className="font-semibold text-2xl">{print.name}</h2>
        </div>
      </div>
    </Link>
  );
}

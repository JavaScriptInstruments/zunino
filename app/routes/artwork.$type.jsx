import Nav from "../components/Nav";
import Artwork from "../components/Artwork";
import Footer from "../components/Footer";
import { useLoaderData } from "@remix-run/react";
import { getArtworks } from "../lib/WordPressService";

export async function loader({ params }) {
  const artworkType = params.type
  const artworks = await getArtworks()
  return [artworks, artworkType]
}

export default function Artworks() {
  const artworksData = useLoaderData();
  const artworkFull = artworksData[0]
  const artworkType = artworksData[1]
  
  const typeFilteredArtworks = artworkFull.filter((artwork) => artwork.artworkType.includes(artworkType.toLowerCase()));

    return (
        <div>
          <Nav title={artworkType}></Nav>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
                {artworkType}
              </h1>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {typeFilteredArtworks.map((artwork) => {
                  return (
                    <a key={artwork.artworkTitle} className="group ">
                      <div className="h-full w-full overflow-hidden rounded-lg bg-gray-200 aspect-h-5 aspect-w-7 ">
                        <Artwork artwork={artwork} key={artwork.artworkTitle}></Artwork>
                      </div>
                      <h2 className="mt-2 text-sm text-gray-700">{artwork.artworkTitle}</h2>
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
    
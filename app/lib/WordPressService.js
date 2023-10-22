import { client } from "./apollo";
import { gql } from "@apollo/client";

export async function getArtworkTypes() {
  const TypesQuery = gql`
  query ArtworkTypes {
    artworks(first: 100) {
      nodes {
        artworkType
      }
    }
  }`

  const response = await client.query({
    query: TypesQuery,
  });

  const artworks = response?.data?.artworks?.nodes;

  const uniqueArtworkTypes = new Set();

  artworks.forEach((artwork) => {
    uniqueArtworkTypes.add(artwork.artworkType[0]);
  });

  const uniqueArtworkTypesList = [...uniqueArtworkTypes];

  return uniqueArtworkTypesList;
}

export async function getArtworks() {
  const ArtworksQuery = gql`
  query Artworks {
    artworks(first: 100) {
      nodes {
        slug
        artworkTitle
        artworkType
        dimensions
        yearProduced
        thumbnail {
          altText
          sourceUrl
        }
        image {
          altText
          sourceUrl
        }
      }
    }
  }
  `

  const response = await client.query({
    query: ArtworksQuery,
  });

  const artworks = response?.data?.artworks?.nodes;

  return artworks;
}

export async function getArtworkBySlug(slug) {
  const ArtworkQuery = gql`
    query ArtworkBySlug($id: ID = "", $idType: ArtworkIdType = SLUG) {
      artwork(id: $id, idType: $idType) {
        slug
        artworkTitle
        artworkType
        dimensions
        yearProduced
        image {
          altText
          sourceUrl
        }
      }
    }
  `;

  const response = await client.query({
    query: ArtworkQuery,
    variables: {
      id: slug,
    },
  });
  const artwork = response?.data?.artwork;
  return artwork;
}

export async function getPaintings() {
  const PaintingsQuery = gql`
    query NewQuery {
      paintings {
        nodes {
          name
          photo {
            altText
            sourceUrl
            title
          }
          thumbnail {
            altText
            sourceUrl
            title
          }
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: PaintingsQuery,
  });

  const paintings = response?.data?.paintings?.nodes;

  return paintings;
}

export async function getPaintingBySlug(slug) {
  const PaintingQuery = gql`
    query GetPaintingBySlug($id: ID!) {
      painting(id: $id, idType: SLUG) {
        slug
        yearPainted
        type
        dimensions
        title
        photo {
          altText
          sourceUrl
          title
        }
      }
    }
  `;

  const response = await client.query({
    query: PaintingQuery,
    variables: {
      id: slug,
    },
  });
  const painting = response?.data?.painting;
  return painting;
}

export async function getPrints() {
  const PrintsQuery = gql`
    query NewQuery {
      prints {
        nodes {
          name
          photo {
            altText
            sourceUrl
            title
          }
          thumbnail {
            altText
            sourceUrl
            title
          }
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: PrintsQuery,
  });

  const prints = response?.data?.prints?.nodes;

  return prints;
}

export async function getPrintBySlug(slug) {
  const PrintQuery = gql`
    query GetPrintBySlug($id: ID!) {
      print(id: $id, idType: SLUG) {
        slug
        yearPrinted
        type
        dimensions
        title
        photo {
          altText
          sourceUrl
          title
        }
      }
    }
  `;

  const response = await client.query({
    query: PrintQuery,
    variables: {
      id: slug,
    },
  });
  const print = response?.data?.print;
  return print;
}

export async function getDrawings() {
  const DrawingsQuery = gql`
    query NewQuery {
      drawings {
        nodes {
          name
          photo {
            altText
            sourceUrl
            title
          }
          thumbnail {
            altText
            sourceUrl
            title
          }
          slug
        }
      }
    }
  `;
  const response = await client.query({
    query: DrawingsQuery,
  });

  const drawings = response?.data?.drawings?.nodes;

  return drawings;
}

export async function getDrawingBySlug(slug) {
  const DrawingQuery = gql`
    query GetDrawingBySlug($id: ID!) {
      drawing(id: $id, idType: SLUG) {
        slug
        yearDrawn
        type
        dimensions
        title
        photo {
          altText
          sourceUrl
          title
        }
      }
    }
  `;

  const response = await client.query({
    query: DrawingQuery,
    variables: {
      id: slug,
    },
  });
  const drawing = response?.data?.drawing;
  return drawing;
}
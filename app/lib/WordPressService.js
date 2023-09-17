import { client } from "./apollo";
import { gql } from "@apollo/client";

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
        description
        name
        slug
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
        description
        name
        slug
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
        description
        name
        slug
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
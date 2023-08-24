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

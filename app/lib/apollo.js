import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "http://zunino.local/graphql",
  uri: "https://zuninodev.wpengine.com/graphql",
  cache: new InMemoryCache(),
});

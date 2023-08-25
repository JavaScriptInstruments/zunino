import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://zuninodev.wpengine.com/graphql",
  cache: new InMemoryCache(),
});

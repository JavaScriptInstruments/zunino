import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://markzunino.flywheelsites.com/graphql",
  cache: new InMemoryCache(),
});

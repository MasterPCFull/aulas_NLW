import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4zu6ysv0j3g01ug1sb43vw9/master',
  cache: new InMemoryCache()  
})
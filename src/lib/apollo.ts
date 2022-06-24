import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ppyr8i274801z4077s8auw/master',
    cache: new InMemoryCache()
})
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clievuju109op01uq9fvr67nx/master',
  headers: {
    Authorization: `Bearer ${process.env.API_ACESS_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

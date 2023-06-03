import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clievuju109op01uq9fvr67nx/master',
  // headers: {
  //   Authorization: `Bearer ${import.meta.env.VITE_API_ACESS_TOKEN}`,
  // },
  cache: new InMemoryCache(),
})

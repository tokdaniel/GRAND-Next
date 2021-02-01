import { ApolloProvider } from '@apollo/client'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import 'tailwindcss/tailwind.css'
import { GlobalStyles } from 'twin.macro'

import { useApollo } from 'graphql/apollo-client'

import 'styles/globals.css'

const _App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ height: '100vh' }}>
        <GlobalStyles />
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}

export default _App

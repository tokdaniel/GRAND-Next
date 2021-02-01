import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type LayoutProps = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I&aposm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout

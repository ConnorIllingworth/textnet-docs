import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Logo from '@/components/logo'
import { Metadata } from 'next'
// import Link from 'next/link'
import { Analytics } from '@vercel/analytics/next'
 
export const metadata: Metadata = {
  title: "TextRetriever Docs",
  description: "Documentation for TextRetriever",
};
 
// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<Logo/>}
    projectLink={process.env.APP_URL}
  />
)
const footer = <Footer>{new Date().getFullYear()} TextRetriever.</Footer>
 
import { ReactNode } from 'react';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>

      </Head>
      <body>
        {/* <Link href={process.env.APP_URL ?? ''}>Back To App</Link> */}
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          // docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          docsRepositoryBase={process.env.REPO_URL}
          footer={footer}
          // ... Your additional layout options
        >
          {children}
          <Analytics/>
        </Layout>
      </body>
    </html>
  )
}
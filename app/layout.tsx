
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "./providers";
import Head from 'next/head';
import { mona_sans } from './fonts';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'San Lin Htike Portfolio',
  description: 'San Lin Htike is a web designer from Myanmar who has a YouTube channel, a Behance portfolio, and a Facebook profile. I also has a GitHub account where he showcases his projects and skills. I am a professional web designer and developer. I am interested in learning new technologies such as Tailwind CSS, BFWD, and React. I has created some courses and tutorials on how to use these tools for web development. I am also a volunteer in Myanmar Red Cross and a first aid trainer. I has a lot of certificates that I received from professors. I am currently attending GUSTO University, where I am studying Computing, IoT. I am also developing Web3, Blockchain, and NFTs at The Glitch Network, a platform that connects creators, collectors, and curators of digital art and NFTs. I am a very talented and passionate web designer and developer. 😊',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mona_sans.className}`}>
        <Head>
          <title>San Lin Htike Portfolio</title>
          <meta property="og:title" content="San Lin Htike Portfolio" key="title" />

          <meta property="og:image" content="./san-lin-htike.png" />
          <meta property="og:image:alt" content="San Lin Htike" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:image" content="./san-lin-htike.png" />
          <meta name="twitter:image:type" content="image/png" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="630" />

        </Head>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <Providers>
            {children}
          </Providers>
        </ThemeProvider>

        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQYS42MPDR"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZQYS42MPDR');
          `}
        </Script>

      </body>
    </html>
  )
}

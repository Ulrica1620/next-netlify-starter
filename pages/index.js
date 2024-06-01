import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
  <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <iframe
        src="https://30days.streamlit.app?embed=true"
        style="height: 450px; width: 100%;"
      ></iframe>
      </main>

      <Footer />
    </div>
  
  )
}

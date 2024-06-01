import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <iframe
        src="https://30days.streamlit.app?embed=true"
        style="height: 450px; width: 100%;"
      ></iframe>
    </div>
  
  )
}

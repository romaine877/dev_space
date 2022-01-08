import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, title, description }) {
    return (
        <div>
             <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        
        <main className='container mx-auto my-7'>
        {children}
        </main>
      
        </div>
    )
}

Layout.applydefaultProps = {
    title: 'DevSpace Blog',
    description: 'A blog about DevSpace'
}
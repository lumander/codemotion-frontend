import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home({ posts }) {
  return (

    <div >
      <Head>
        <title>Codemotion Frontend Example App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.ibm.com/favicon.ico" />
      </Head>
      <header className={styles.headerSup}>
        Codemotion Demo
        </header>
        <header className={styles.header}>
        RedHat OpenShift: CI/CD pipelines into the Service Mesh
        </header>
      <main className={styles.main}>

        <h1 className={styles.title}>
        <span aria-label="Hand wave" role="img">
                  👋{' '}
                </span>{' '}
                           Welcome!                 
            <span aria-label="Hand wave" role="img">
                  👋{' '}
                </span>{' '}
        </h1>

        <p className={styles.description}>
          Tech Stack
        </p>
          <div className={styles.grid}>
            { posts.map((post) => (
              <a href={post.description} className={styles.card}>
                <h2>{post.name}</h2>
              </a>
            ))}
          </div>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://inventory.dev.svc.cluster.local:8080/item/all`)
  const posts = await res.json()

  return {
    props: { posts }, // will be passed to the page component as props
  }
}

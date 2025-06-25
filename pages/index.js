import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Suspense } from 'react'

// Dynamically import the 3D component to avoid SSR issues
const ThreeScene = dynamic(() => import('../src/App'), {
  ssr: false,
  loading: () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '18px',
      color: '#666'
    }}>
      Loading 3D Scene...
    </div>
  )
})

export default function Home() {
  return (
    <>
      <Head>
        <title>React Three Fiber Physics Demo</title>
        <meta name="description" content="A beautiful 3D physics simulation built with React Three Fiber" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '18px',
            color: '#666'
          }}>
            Loading...
          </div>
        }>
          <ThreeScene />
        </Suspense>
      </main>
    </>
  )
} 
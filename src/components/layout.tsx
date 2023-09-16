import Head from 'next/head'
import Header from './header'
import { useSession } from 'next-auth/react'
import { NextPage } from 'next'
import NavBar from './navbar'
import React from 'react'

type LayoutProps = {
  user?: any
  loading?: boolean
  children: any//React.ReactNode
}
const Layout: NextPage<LayoutProps> = ({children}) => {
  const {data: session, status} = useSession({ required: false});
  if(typeof window !== 'undefined') {
      if (session == null ){
          window.location.replace('/login');
      }
  }
  const setBlur = (show: boolean, c: any) => {

  }
return(<div>
  <NavBar blurCallback={setBlur}  />
  <div>
      {
          React.cloneElement(children, { session: session, setBlur: setBlur})
      }
  </div>
</div>);
}

// const Layout = ({ user, loading = false, children }: LayoutProps) => {
//   return (
//     <>
//       <Head>
//         <title>Next.js with Auth0</title>
//       </Head>

//       <Header user={user} loading={loading} />

//       <main>
//         <div className="container">{children}</div>
//       </main>

//       <style jsx>{`
//         .container {
//           max-width: 42rem;
//           margin: 1.5rem auto;
//         }
//       `}</style>
//       <style jsx global>{`
//         body {
//           margin: 0;
//           color: #333;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
//             Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//         }
//       `}</style>
//     </>
//   )
// }

export default Layout
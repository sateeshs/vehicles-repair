import Layout from '@/components/layout'
import { headers } from 'next/headers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import AuthContext from './AuthContext'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from './pages/auth/api/auth/[...nextauth]/route'
import NavBar from '@/components/navbar'
import ClientLanding from '@/components/landing/client-dashboard'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryder Truck repair',
  description: 'Generated by create next app',
}


async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //const session = await getSession(headers().get('cookie') ?? '');
  const session = await getServerSession(authOptions);
  const setBlur = (show: boolean, c: any) => {

  }
  return (
    <html lang="en">
    {/* <SessionProvider session={session}>
      <body className={inter.className}>{
      <Layout>children</Layout>
      }</body>
      </SessionProvider> */}
          <body className={inter.className}>
            <div className="min-h-full">
            <Suspense>
          <NavBar   />
          <ClientLanding >{children}</ClientLanding>
              {/* <AuthContext session={session!}> */}
          
        {/* </AuthContext> */}
            </Suspense>
            </div>

        
      </body>
    </html>
  )
}

import NextAuth, { NextAuthOptions } from "next-auth"

import OktaProvider from "next-auth/providers/okta"

export const authOptions: NextAuthOptions = {
    providers: [
        OktaProvider({
            clientId: process.env.AUTH0_ID!,
            clientSecret: process.env.AUTH0_SECRET!,
            issuer: process.env.AUTH0_ISSUER,
          }),
    ],
    theme: {
      colorScheme: "light",
    },
    callbacks: {
      async jwt({ token }) {
        token.userRole = "admin"
        return token
      },
    },
}

export default NextAuth(authOptions)
// import NextAuth, { AuthOptions } from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// export const authOptions: AuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: String(process.env.GITHUB_ID),
//       clientSecret: String(process.env.GITHUB_SECRET),
//     }),
//   ],
//   callbacks: {
//     async signIn({ user }) {
//       let isAllowedToSignIn = true
//       const allowedUser = [
//         'YOURGITHUBACCID',
//       ];
//       console.log(user);
//       if (allowedUser.includes(String(user.id))) {
//         isAllowedToSignIn = true
//       }
//       else {
//         isAllowedToSignIn = false
//       }
//       return isAllowedToSignIn
//     }
//   }
// }

// export default NextAuth(authOptions)

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
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next"
import OktaProvider from "next-auth/providers/okta"

//import { config } from "../../../../auth"

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        OktaProvider({
            clientId: process.env.AUTH0_ID!,
            clientSecret: process.env.AUTH0_SECRET!,
            issuer: process.env.AUTH0_ISSUER,
          }),
    //   GithubProvider({
    //     clientId: process.env.GITHUB_CLIENT_ID as string,
    //     clientSecret: process.env.GITHUB_SECRET_ID as string,
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID as string,
    //     clientSecret: process.env.GOOGLE_SECRET_ID as string,
    //   }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
  };
  
  const handler = NextAuth(authOptions);
// const handler = NextAuth(config)
export { handler as GET, handler as POST }
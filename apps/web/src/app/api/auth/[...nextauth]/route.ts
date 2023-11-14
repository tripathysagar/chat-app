import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            console.log("Promise resolved after 1500 milliseconds");
            resolve(); // Resolve the Promise after the log statement
          }, 1500);
        });

        return Promise.resolve({
          id: "1",
          email: credentials?.username || undefined,
        });
      },
    }),
  ],
  callbacks: {
    async redirect(){
        return '/';
    }
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = nextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
});

export { handler as GET, handler as POST };

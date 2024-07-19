import NextAuth from "next-auth";
import discord, { DiscordProfile } from "next-auth/providers/discord";
import { createUser, getUserFromUsername } from "./app/lib/actions";

const scopes = ["identify"];


export const { auth, handlers, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    discord({
      clientId: "1046516394562437281",
      clientSecret: process.env.DISCORD_SECRET as string,
      authorization: { params: { scope: scopes.join(" ") } },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user);
      const prof = profile as DiscordProfile;
      const usr = await getUserFromUsername(prof.username as string);
      if (!usr) {
        return true
      } else {
        const success = await createUser(
          prof.username as string,
          prof.id as string
        );
  
        if (success) {
          return true;
        } else {
          return false;
        }
      }
    },
  },
});
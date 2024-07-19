import { NextAuthOptions } from "next-auth";
import Discord from "next-auth/providers/discord";
import Spotify from "next-auth/providers/spotify";
import { DiscordProfile } from "next-auth/providers/discord";
import { createUser } from "./actions";

const scopes = ["identify"];


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Discord({
      clientId: "1046516394562437281",
      clientSecret: process.env.DISCORD_SECRET as string,
      authorization: { params: { scope: scopes.join(" ") } },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const prof = profile as DiscordProfile;
      const success = await createUser(
        prof.username as string,
        prof.id as string
      );

      if (success) {
        return true;
      } else {
        return false;
      }
    },
  },
};
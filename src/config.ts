export const isDev = process.env.NODE_ENV === "development";

export const title = "CarbonSeeds";
export const description =
  "Get rewarded from the CO2 absorption of your future tree.";

// From tailwind defaults
export const mediaQueries = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const twitterName = process.env.NEXT_TWITTER_NAME || "";
export const twitterUrl = `https://twitter.com/${twitterName}`;
export const discordInvitationLink = process.env.NEXT_DISCORD_URL || "";

export const siteUrl = process.env.NEXT_SITE_URL || "";

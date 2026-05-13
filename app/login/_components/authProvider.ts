export const oauthProviderIds = ["google", "apple"] as const;

export type OAuthProviderId = (typeof oauthProviderIds)[number];

export const defaultLoginRedirectPath = "/mypage" as const;

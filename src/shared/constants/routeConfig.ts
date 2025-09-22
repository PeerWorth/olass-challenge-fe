interface RouteConfig {
  showHeader: boolean;
  showShareButton?: boolean;
  showProfileButton?: boolean;
  backgroundColor?: HeaderBackgroundColor;
}

export type HeaderBackgroundColor = "white" | "transparent" | string;

export const ROUTE_CONFIG: Record<string, RouteConfig> = {
  "/": { showHeader: true },
  "/landing": {
    showHeader: true,
    showShareButton: true,
    backgroundColor: "white",
  },
  "/login": {
    showHeader: true,
    backgroundColor: "login-background",
  },
};

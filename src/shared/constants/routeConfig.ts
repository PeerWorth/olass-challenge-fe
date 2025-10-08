interface RouteConfig {
  showHeader: boolean;
  showShareButton?: boolean;
  showProfileButton?: boolean;
  backgroundColor?: HeaderBackgroundColor;
}

export type HeaderBackgroundColor = "white" | "transparent" | string;

type RoutePathValue = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];

export const ROUTE_CONFIG: Record<RoutePathValue, RouteConfig> = {
  "/": { showHeader: true },
  "/landing": {
    showHeader: true,
    showShareButton: true,
    backgroundColor: "common100",
  },
  "/login": {
    showHeader: true,
    backgroundColor: "login-background",
  },
  "/login/kakao": {
    showHeader: true,
    backgroundColor: "login-background",
  },
  "/signUp": {
    showHeader: true,
    backgroundColor: "login-background",
  },
};

export const ROUTE_PATH = {
  HOME: "/",
  LANDING: "/landing",
  LOGIN: "/login",
  LOGIN_KAKAO: "/login/kakao",
  SIGN_UP: "/signUp",
};

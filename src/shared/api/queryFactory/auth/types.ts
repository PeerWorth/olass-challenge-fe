interface KakaoParams {
  idToken: string;
}

interface KakaoResponse {
  accessToken: string;
  isNewUser: boolean;
}

interface KakaoTokenParams {
  grant_type: "authorization_code" // authorization_code
  client_id: string // 앱 REST API 키
  redirect_uri: string // 인가 코드가 리다이렉트된 URI
  code: string // 인가 코드 요청으로 얻은 인가 코드
}

interface KakaoTokenResponse {
  id_token: string;
}

export type { KakaoParams, KakaoResponse, KakaoTokenParams, KakaoTokenResponse };
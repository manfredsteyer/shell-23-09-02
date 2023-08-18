export class AppConfig {
  environment: string;
  timeoutMinutes: number;
  versionNumber: string;
  apiUrl: string;
  secureApis: string[];
  unsecureEndpoints: string[];
  okta: {
    clientId: string;
    issuer: string;
    redirectUri: string;
    postLogoutRedirectUri: string;
    scopes: string[];
    pkce: boolean;
  };
  maxPollingAttempts: number;
  pollingInterval: number;
}

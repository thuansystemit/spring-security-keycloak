import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'angular-app',
          clientId: 'Id-2fb595a7-04e0-4ccb-a7e1-f6e9a33c4fd9',
        },
        initOptions: {
            // onLoad: 'login-required',
            // checkLoginIframe: false
        },
        loadUserProfileAtStartUp: true
      });
}
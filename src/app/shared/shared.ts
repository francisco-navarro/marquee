import AuthenticationService from './services/authentication.service';
// import SettingsService from './services/settings.service';

const SHARED_PROVIDERS: any[] = [
  AuthenticationService
];

export {
  AuthenticationService,
  SHARED_PROVIDERS
};
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEENEE_SDK_TOKEN_DEV: string;
  readonly VITE_GEENEE_SDK_TOKEN_PROD: string;
  // Add any other env variables you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

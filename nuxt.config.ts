// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  ssr: true,
  modules: ["@formkit/auto-animate/nuxt"],
  runtimeConfig: {
    bitBucketBaseUrl: process.env.BIT_BUCKET_BASE_URL,
    bitBucket: process.env.BIT_BUCKET_URI,
    bitBucketApiKey: process.env.BIT_BUCKET_API_KEY,
    bitBucketApiUser: process.env.BIT_BUCKET_API_USER,
    LyfterUser: process.env.USER_NAME,
    LyfterPassword: process.env.USER_PASSWORD,
    dbConnection: process.env.DATABASE_URL,
  },
});

// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6620ce5e93773093531b542380f17a8b@o4510584016142336.ingest.de.sentry.io/4510584039342160",

  integrations: [
    Sentry.vercelAIIntegration({
      recordInputs:true,
      recordOutputs:true,
    }),

    Sentry.consoleLoggingIntegration({levels: ["log","warn","error"]}),


  ],


  

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,
  sendDefaultPii:true,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

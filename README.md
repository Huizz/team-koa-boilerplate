# Koa boilerplate

A koa boilerplate for building koa apps.
Built on koalerplate

A simple Koa 2 boilerplate for API's using ES6.

## Getting Started

```
git clone https://github.com/Huizz/team-koa-boilerplate.git
mv .env.sample .env
npm run dev
```

By default the API server starts on port 3002, http://localhost:3002.

## Guidelines
- Use HTTP Methods & API Routes. API routes should always use nouns as resource identifiers.
- Routes are used to define routing in app. Each folder is a  resource identifier
- Use HTTP Status Codes Correctly
    - 2xx, if everything was okay,
    - 3xx, if the resource was moved,
    - 4xx, if the request cannot be fulfilled because of a client error (like requesting a resource that does not exist),
    - 5xx, if something went wrong on the API side (like an exception happened).
- Koa guide: https://github.com/koajs/koa/blob/master/docs/guide.md
- Models are for business logic implementation. Models map to data in db


## Description as per koalerplate

## What's in the package?

* Routing with koa-router.
* Parsing request with koa-bodyparser.
* CORS middleware with @koa/cors.
* koa-respond for helper functions on the context.
* koa-helmet for important security headers.
* nodemon for development to auto-restart when your files change.
* dotenv for environment variable management.

### Prerequisites

* node >= v7.6.0
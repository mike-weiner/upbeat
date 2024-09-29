# Upbeat

A barebones Next.js web application that does nothing other than serve an upbeat for basic health checking. This application is meant to be used as a basic container-based application for traffic flow checks.

## Getting Started

1. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Visit `/up` to see your upbeat health check.

## Running as a Container

This application is publicly available via `docker pull michaelweiner/upbeat`. If needed, the container image can be built and run locally by:

1. Build image via `docker build -t upbeat:dev .`.
2. Start a container via `docker run -p 3000:80 upbeat:dev`.
3. Visit `localhost:3000` in a browser on your local machine.
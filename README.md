# tuio-proposal

This Next.js proposal can be served from a custom base path. To avoid 404 errors when hosting under a subdirectory, set `NEXT_PUBLIC_BASE_PATH` before running the development or production build:

```bash
NEXT_PUBLIC_BASE_PATH=/foo npm run dev
NEXT_PUBLIC_BASE_PATH=/foo npm run build
```

The value should match the path segment where the site is deployed.

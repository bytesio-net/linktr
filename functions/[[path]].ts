import { ServerBuild } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - the server build file is generated by `remix vite:build`
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server";

const buildWithInejctedType = build as ServerBuild;

export const onRequest = createPagesFunctionHandler({
  build: buildWithInejctedType,
});
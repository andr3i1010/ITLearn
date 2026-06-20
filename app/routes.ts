import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix(":locale?", [
    index("routes/_index.tsx"),
    route("api/auth/*", "routes/api/auth/[...auth].ts"),
    route("auth/sign-in", "routes/auth/sign-in.tsx"),
    route("auth/sign-up", "routes/auth/sign-up.tsx"),
    route("app", "routes/app/_index.tsx"),
  ]),
] satisfies RouteConfig;

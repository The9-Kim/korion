import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  
  route("machines", "routes/machines/layout.tsx", [
    index("routes/machines/produce.tsx"), // Default to produce
    route("produce", "routes/machines/produce.tsx", { id: "machines-produce" }), // Explicit ID
    route("produce/:id", "routes/machines/product-detail.tsx", { id: "produce-detail" }),
    route("imports", "routes/machines/imports.tsx", { id: "machines-imports" }),
    route("imports/:id", "routes/machines/product-detail.tsx", { id: "imports-detail" }),
  ]),
] satisfies RouteConfig;

import type { Route } from "./+types/home";
import Layout from "../components/Layout";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import ProductShowcase from "../components/landing/ProductShowcase";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Korion - Agricultural Machinery" },
    { name: "description", content: "Korion Agricultural Machinery - Precision Harvesting, Powerful Performance" },
  ];
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <ProductShowcase />
    </Layout>
  );
}

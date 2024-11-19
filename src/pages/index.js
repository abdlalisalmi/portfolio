"use client";

import { Hero } from "@/components/hero";
import Layout from "@/components/layout";
import OpenSourceProjects from "@/components/openSourceProjects";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <OpenSourceProjects />
      <OpenSourceProjects />
    </Layout>
  );
}

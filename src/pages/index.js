"use client";

import { Clients } from "@/components/clients";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Layout from "@/components/layout";
import OpenSourceProjects from "@/components/openSourceProjects";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OpenSourceProjects />
      <Clients />
      <Footer />
    </Layout>
  );
}

import { BackgroundHighlight } from "@/components/ui/backgroundHighlight";
import Navbar from "@/components/ui/navbar";

export default function Layout({ children }) {
  return (
    <BackgroundHighlight>
      <main className="w-screen max-w-screen-lg px-4 md:px-8 mx-auto">
        <Navbar />
        {children}
      </main>
    </BackgroundHighlight>
  );
}

import { BackgroundHighlight } from "@/components/ui/backgroundHighlight";

export default function Layout({ children }) {
  return (
    <BackgroundHighlight>
      {/* <Navbar /> */}
      {children}
    </BackgroundHighlight>
  );
}

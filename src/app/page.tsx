import { headers } from "next/headers";
import isMobile from "ismobilejs";
import Home from "@/components/home/page";
import HomeMobile from "@/components/home-mobile/page";

export default function App() {
  const ua: string = headers().get("User-Agent") ?? "";
  if (isMobile(ua).phone) {
    return (
      <>
        <HomeMobile />
      </>
    );
  } else {
    return <Home />;
  }
}

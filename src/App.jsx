import { useEffect, useState } from "react";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Home from "./pages/Home";

function getRouteFromHash() {
  if (typeof window === "undefined") {
    return "home";
  }

  if (window.location.hash === "#chapter-1") {
    return "chapter-1";
  }

  if (window.location.hash === "#chapter-2") {
    return "chapter-2";
  }

  return "home";
}

function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "chapter-1") {
    return <Chapter1 />;
  }

  if (route === "chapter-2") {
    return <Chapter2 />;
  }

  return <Home />;
}

export default App;

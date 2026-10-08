import { useEffect, useState } from "react";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
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

  if (window.location.hash === "#chapter-3") {
    return "chapter-3";
  }

  if (window.location.hash === "#chapter-4") {
    return "chapter-4";
  }

  if (window.location.hash === "#chapter-5") {
    return "chapter-5";
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

  if (route === "chapter-3") {
    return <Chapter3 />;
  }

  if (route === "chapter-4") {
    return <Chapter4 />;
  }

  if (route === "chapter-5") {
    return <Chapter5 />;
  }

  return <Home />;
}

export default App;

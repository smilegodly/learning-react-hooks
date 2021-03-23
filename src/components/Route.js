import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocatationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocatationChange);

    return () => {
      window.removeEventListener("popstate", onLocatationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

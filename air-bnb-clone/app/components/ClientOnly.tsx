"use client";
import { FC, ReactNode, useEffect, useState } from "react";

interface ClientOnlyProps {
  children: ReactNode;
}

// this component protects from unwanted error from server side rendering and hydration
const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div>{children}</div>;
};

export default ClientOnly;

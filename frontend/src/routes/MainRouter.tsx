import type { ReactNode } from "react";
import { BrowserRouter, Routes } from "react-router-dom";

type MainRouterProps = {
  children: ReactNode
};

export function MainRouter({ children }: MainRouterProps) {

  return (
    <BrowserRouter>
      <Routes>
        {children}
      </Routes>
    </BrowserRouter>
  );
}
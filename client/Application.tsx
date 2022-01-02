import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ContentContainer } from "./components/Containers/ContentContainer";
import { HeartIcon } from "./components/Icons/Heart";
import { Routes } from "./Routes";
import { HeaderNavigation } from "./components/Navigation/HeaderNavigation";
import { ToastProvider } from "./helpers";

export function Application(): React.ReactComponentElement<any> {
  // When the URL changes, scroll to the top
  const { pathname, search } = useLocation();
  React.useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [pathname, search]);

  return (
    <div className="max-w-screen-xl w-full flex flex-col min-h-full px-1 sm:px-2 md:px-8 bg-white">
      <div className="min-h-screen">
        <header className="overflow-x-scroll lg:overflow-x-hidden">
          <ContentContainer className="mt-4 pb-4 mb-4 flex items-center">
            <h1 className="text-center text-emerald-400 mr-12">
              <Link to="/" title="w8mngr" className="flex items-center">
                <div className="text-5xl">
                  <HeartIcon />
                </div>
                <div className="text-base ml-4 flex items-center">
                  <b className="font-light text-emerald-700">w</b>
                  <b className="text-purple-800 font-bold text-xl">8</b>
                  <b className="font-light text-emerald-700">mngr</b>
                </div>
              </Link>
            </h1>
            <HeaderNavigation />
          </ContentContainer>
        </header>
        <main className="flex-grow flex-1 flex-col">
          <ToastProvider>
            <Routes />
          </ToastProvider>
        </main>
      </div>
      <footer className="mt-12 text-slate-50 bg-slate-900 mt-13 py-8 -mx-2 md:-mx-8 flex items-center min-h-screen">
        <ContentContainer>Footer</ContentContainer>
      </footer>
    </div>
  );
}

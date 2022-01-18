import React from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";

import { ContentContainer } from "./components/Containers/ContentContainer";
import { Routes } from "./Routes";
import { HeaderNavigation } from "./components/Navigation/HeaderNavigation";
import { ToastProvider } from "./helpers";
import { Logo } from "./components/Logo";
import { IsLoggedIn } from "./components/Auth/IsLoggedIn";
import { IsLoggedOut } from "./components/Auth/IsLoggedOut";
import { Link } from "./components/Link";

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
        <header className="overflow-x-auto lg:overflow-x-hidden">
          <ContentContainer className="mt-4 pb-4 mb-4 flex items-center">
            <h1 className="text-center text-emerald-400 mr-12">
              <ReactRouterLink
                to="/"
                title="w8mngr"
                className="flex items-center text-6xl"
              >
                <Logo />
              </ReactRouterLink>
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
      <footer className="mt-12 text-slate-200 bg-slate-900 mt-13 py-8 px-12 -mx-2 md:-mx-8 flex items-center min-h-screen">
        <ContentContainer>
          <div className="flex gap-6 space-around">
            <div className="w-1/3">
              <FooterHeader>About</FooterHeader>
              <div className="flex flex-col gap-2">
                <p>Copyright 2009-2022, Ryan Poe</p>
                <p>
                  w8mngr was built from scratch with TypeScript, React, Tailwind,
                  and Apollo. Hosted by Netlify.
                </p>
                <p>
                  This software is open source. Want to add a feature or report
                  a bug? Checkout{" "}
                  <FooterLink to="https://github.com/baublet/w8mngr-2020">
                    w8mngr on GitHub
                  </FooterLink>
                  .
                </p>
              </div>
            </div>

            <div className="w-1/3">
              <FooterHeader>Account</FooterHeader>
              <IsLoggedOut>
                <ul className="list-disc list-inside">
                  <li>
                    <FooterLink to="/register">Get Started</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/login">Login</FooterLink>
                  </li>
                </ul>
              </IsLoggedOut>
              <IsLoggedIn>
                <ul className="list-disc list-inside">
                  <li>
                    <FooterLink to="/nutrition">Dashboard</FooterLink>
                  </li>
                  <li>
                    <FooterLink to="/logout">Logout</FooterLink>
                  </li>
                </ul>
              </IsLoggedIn>
            </div>

            <div className="w-1/3">
              <FooterHeader>
                w<span className="text-emerald-300">8</span>mngr
              </FooterHeader>
              <ul className="list-disc list-inside">
                <li>
                  <FooterLink to="/">Home</FooterLink>
                </li>
                <li>
                  <FooterLink to="/register">Register</FooterLink>
                </li>
                <li>
                  <FooterLink to="/privacy">Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink to="/tos">Terms of Service</FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </ContentContainer>
      </footer>
    </div>
  );
}

function FooterHeader({ children }: React.PropsWithChildren<{}>) {
  return <h3 className="text-3xl font-thin mb-4">{children}</h3>;
}

function FooterLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className="text-emerald-500 hover:text-emerald-300 hover:underline"
    />
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../style.css?url";
import { Nav } from "../components/Nav";
import { GeometryCursor } from "../components/GeometryCursor";
import { GridOverlay } from "../components/GridOverlay";
import { GeometryDock } from "../components/GeometryDock";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-[120px] leading-none">404</h1>
        <p className="mt-4 text-mono-label text-gray">SHAPE NOT FOUND</p>
        <Link to="/" className="mt-6 inline-block bg-ink px-4 py-2 text-mono-label text-paper">RETURN HOME</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-display text-3xl">Something broke the grid.</h1>
        <p className="mt-2 text-sm text-gray">Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="bg-ink px-4 py-2 text-mono-label text-paper">TRY AGAIN</button>
          <a href="/" className="border border-ink px-4 py-2 text-mono-label">HOME</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "dvinay.com — Design · Develop · Automate" },
      { name: "description", content: "Vinay — web developer, designer of digital experiences, and builder of automated business systems." },
      { property: "og:title", content: "dvinay.com — Design · Develop · Automate" },
      { property: "og:description", content: "A Swiss design exhibition that happens to showcase a web developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <GeometryCursor />
      <GridOverlay />
      <Nav />
      <main>
        <Outlet />
      </main>
      <GeometryDock />
    </QueryClientProvider>
  );
}
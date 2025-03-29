import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useMainContext } from "./providers/main-provider";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const rootContext = useMainContext();
  return (
    <RouterProvider router={router} context={{ queryClient, ...rootContext }} />
  );
}

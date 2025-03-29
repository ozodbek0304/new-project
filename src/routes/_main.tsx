import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_main")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative max-h-screen overflow-y-auto">
      <Outlet />
    </div>
  );
}

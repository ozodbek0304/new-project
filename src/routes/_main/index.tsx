import Layout from "@/layouts/layout";
import HomePages from "@/components/pages/home/index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_main/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Layout>
      <HomePages />
    </Layout>
  );
}

import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { ScrollReveal, GeoShape } from "../../components/ui";

export const Route = createFileRoute("/work/$slug")({
  component: WorkDetailLayout,
});

function WorkDetailLayout() {
  return (
    <div className="overflow-hidden">
      <WorkDetailOutlet />
    </div>
  );
}

function WorkDetailOutlet() {
  return <Outlet />;
}
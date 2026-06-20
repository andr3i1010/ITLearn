import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ITLearn" },
    { name: "description", content: "The free and open source IT education platform." },
  ];
}

export default function Home() {
  return (
    <div>
      hello world
    </div>
  );
}

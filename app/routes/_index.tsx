import { Button } from "~/components/ui/button";
import type { Route } from "./+types/_index";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ITLearn" },
    { name: "description", content: "The free and open source IT education platform." },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      hello world
      <Button onClick={() => navigate("/auth/sign-in")}>login</Button>
    </div>
  );
}

import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth/client";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div>
      <form className="gap-4" onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const { error } = await authClient.signIn.email({ email, password });
        if (error) {
          alert(error.message);
        } else {
          navigate("/app");
        }
      }}>
        <input type="email" name="email" placeholder="Email" className="border" />
        <input type="password" name="password" placeholder="Password" className="border" />
        <Button type="submit">Sign In</Button>
      </form>
      <Button onClick={() => {
        navigate("/auth/sign-up")
      }}>sign up</Button>
    </div>
  )
}
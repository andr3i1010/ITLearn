import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth/client";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      <form className="gap-4" onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const username = formData.get("username") as string;
        const password = formData.get("password") as string;
        const { error } = await authClient.signUp.email({ email, name: username, username, password });
        if (error) {
          alert(error.message);
        } else {
          alert("User created successfully");
          navigate("/auth/sign-in");
        }
      }}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <Button type="submit">Sign Up</Button>
      </form>
      <Button onClick={() => {
        navigate("/auth/sign-in")
      }}>sign in</Button>
    </div>
  )
}
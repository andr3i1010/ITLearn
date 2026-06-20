import { redirect, useLoaderData, useNavigate } from "react-router";
import type { Route } from "./+types/_index";
import { auth } from "~/lib/auth/server";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth/client";

export async function loader(loaderArgs: Route.LoaderArgs) {
  const session = await auth.api.getSession({
    headers: loaderArgs.request.headers,
  })
  if (!session) {
    return redirect("/auth/sign-in")
  } else {
    return { session }
  }
}

export default function Landing() {
  const { session } = useLoaderData<typeof loader>()
  const navigate = useNavigate()
  return (
    <>
      <p>You're signed in! Yay!</p>
      <p>User info: {JSON.stringify(session.user)}</p>
      <p>Session info: {JSON.stringify(session.session)}</p>
      <Button onClick={async () => {
        await authClient.signOut()
        navigate("/auth/sign-in")
      }}>Sign out</Button>
    </>
  )
}
import LoginButton from "@/components/loginButton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  authors: {
    name: "Brent Baylon",
    url: "https://github.com/AnonymouseHucker29",
  },
};

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-40 min-h-screen p-5">
      <Card className="p-3">
        <CardHeader>
          <CardTitle>
            <p className="text-center">
              You need to be logged in first before you can access the page.
            </p>
          </CardTitle>
        </CardHeader>
      </Card>
      <LoginButton />
    </div>
  );
};

export default LoginPage;

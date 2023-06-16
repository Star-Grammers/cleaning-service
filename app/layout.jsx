import "./globals.css";
import { getServerSession } from "next-auth/next";
import x from "../testAdmin";
import { authOptions } from "./api/auth/[...nextauth]/route";
import UserNavbar from "../components/UI/UserNavbar";
import Footer from "../components/UI/Footer";
import Provider from "../store/Provider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  const role = x.includes(session?.user?.email) ? "admin" : "user";
  return (
    <html lang="en">
      <body>
        <Provider session={session} role={role}>
          <UserNavbar role={role}>{children}</UserNavbar>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

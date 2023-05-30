import "./globals.css";
import { Roboto } from "next/font/google";

import Navbar from "@/components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigation = [
    {
      name: "Dashboard",
      href: "/",
    },
    {
      name: "Expenses",
      href: "/expenses",
    },
    {
      name: "Income",
      href: "/income",
    },
  ];

  const user = {
    name: "Stathis Stathopoulos",
    email: "stathopoulos.stathis98@gmail.com",
    imageUrl:
      "https://scontent.fath3-3.fna.fbcdn.net/v/t39.30808-6/323906034_1236896087232613_1524743585775446403_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=G25F0OO5Hw4AX-niCOF&_nc_ht=scontent.fath3-3.fna&oh=00_AfA645Rf_m6T6VWw8byj43pUufHcVybrmxSRJ1GyYZfF_A&oe=64798E76",
  };

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-100`}>
        <Navbar navigation={navigation} user={user} />
        <main className="max-w-4xl my-10 mx-6 md:mx-auto">{children}</main>
      </body>
    </html>
  );
}

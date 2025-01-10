import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";
export const metadata = {
  title: "Mahir Faysal Haque Dipto",
  description:
    "My name is Mahir Faysal Haque Dipto I am a Full-Stack JS & C# developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}

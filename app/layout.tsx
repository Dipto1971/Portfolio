import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";
export const metadata = {
  title: "Mahir Faysal Haque Dipto",
  description:
    "Expertise in C#, WPF, and WinForms, complemented by two years of hands-on experience in MERN stack development. Professional backend developer, specialized in designing secure and scalable systems. Currently, I'm working on WebRTC, focusing on real-time communication technologies for the web. I’m presently learning Go, Statistical Data Analysis. I’m looking to collaborate on WebRTC, NEXT.js projects. Ask me about WebRTC, MERN",
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

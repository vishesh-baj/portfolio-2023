import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metaData = {
  title: "Promptopia",
  description: "Descover and share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Nav />
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

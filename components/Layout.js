import styles from "../styles/Home.module.css";

import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}

export default Layout;

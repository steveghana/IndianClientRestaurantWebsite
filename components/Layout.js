import styles from "../styles/Home.module.scss";

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

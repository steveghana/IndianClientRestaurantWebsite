import navStyles from "../styles/nav.module.css";
import { SearchOutlined, Shop } from "@material-ui/icons";
function Nav() {
  return (
    <div className={navStyles.nav}>
      <ul className={navStyles.ul}>
        <li className={navStyles.logo}>Home</li>
        <li>
          <SearchOutlined /> Search
        </li>
        <li>
          <Shop />
          About
        </li>
      </ul>
    </div>
  );
}

export default Nav;

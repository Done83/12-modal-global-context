/* eslint-disable no-unused-vars */
import { FaTimes } from "react-icons/fa";
import logo from "./logo.svg";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSideBarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img src={logo} alt="codding addict" className="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {links.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;

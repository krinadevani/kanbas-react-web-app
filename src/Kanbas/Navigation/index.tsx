import { Link, useLocation } from "react-router-dom";
import "./index.css";
import logo from "../../NeuLogo.png";
import { FaTachometerAlt, FaUser, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaMicrophone, FaRegCaretSquareRight, FaInfoCircle } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaUser className="fs-2 wd-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 wd-icon red-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 wd-icon red-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 wd-icon red-icon" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2 wd-icon red-icon" /> },
    { label: "History",  icon: <FaClock className="fs-2 wd-icon red-icon" /> },
    { label: "Studio",  icon: <FaMicrophone className="fs-2 wd-icon red-icon" /> },
    { label: "Commons",  icon: <FaRegCaretSquareRight className="fs-2 wd-icon red-icon" /> },
    { label: "Help",  icon: <FaInfoCircle className="fs-2 wd-icon red-icon" /> },
  ];
  const { pathname } = useLocation();
 
  return (
    <div className="list-group wd-kanbas-navigation d-none d-md-block">
      <Link
        to="/Kanbas/Dashboard"
        className={`list-group-item`}
      >
        <img
          src={logo}
          alt="Neu Logo"
          className="img-thumbnail ps-0 pe-0 neu-logo"
        />
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.label}`}
          className={`list-group-item ${pathname.includes(link.label) ? "active" : ""}`}
        >
          {link.icon}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
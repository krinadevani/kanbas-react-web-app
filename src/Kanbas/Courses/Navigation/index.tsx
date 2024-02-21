import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
import { FaEyeSlash } from "react-icons/fa";
function CourseNavigation() {
    const links = [
      { label: "Home"},
      { label: "Modules" },
      { label: "Piazza" },
      { label: "Zoom Meetings", disabled : true },
      { label: "Assignments" },
      { label: "Quizzes", disabled : true },
      { label: "Grades" },
      { label: "People", disabled : true},
      { label: "Panopto Video", disabled : true },
      { label: "Discussions", icon: true , disabled : true},
      { label: "Announcements", icon: true, disabled : true },
      { label: "Pages", icon: true, disabled : true },
      { label: "Files", icon: true, disabled : true },
      { label: "Rubrics", icon: true, disabled : true },
      { label: "Outcomes", icon: true, disabled : true },
      { label: "Collaborations", icon: true, disabled : true },
      { label: "Syllabus", disabled : true },
      { label: "Settings", disabled : true },
    ];
    const { courseId } = useParams();
    const { pathname } = useLocation();
  
    return (
      <div
        className="col-2 d-none d-md-block text-wrap me-3 "
        style={{ paddingLeft: "20px" }}
      >
        <ul className="wd-course-navigation">
          {links.map((link, index) => (
            <li
              style={
                pathname.includes(link.label) && !link.disabled
                  ? { borderLeft: "2px solid black" }
                  : {}
              }
              className = {link.disabled ? "disabled" : ""}
            >
              <Link
                key={index}
                to={`/Kanbas/Courses/${courseId}/${link.label}`}
                className={`list-group-item ${
                  pathname.includes(link.label)  && !link.disabled && "active"
                }`}
              >
                {link.label}
                {link.icon && (
                  <div className="float-end">
                    <FaEyeSlash />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default CourseNavigation;
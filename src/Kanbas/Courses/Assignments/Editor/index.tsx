import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";



const CustomComponent = () => {
    return (
      <div className="row">
        <div className="col">
          <button className="btn btn-light me-3 float-end">
            <FaEllipsisV style={{ color: "#050505" }} />
          </button>
          <label className="text-success me-3 pt-1 fs-5 float-end">
            Published
          </label>
          <FaCheckCircle className="float-end me-3 fs-5 text-success mt-2" />
        </div>
      </div>
    );
  };

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
        <CustomComponent/>
        <hr/>
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
 
}
export default AssignmentEditor;
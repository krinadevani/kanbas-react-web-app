import React from "react";
import { FaCheckCircle, FaEdit, FaGripVertical, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

const AssignmentSearchBar = () => {
  return (
    <div className="pe-0 me-0 ps-0 ms-0">
      <div className="row pt-3 pb-1 ms-0 ps-0">
        <div className="col" style={{ marginLeft: "-23px" }}>
          <input
            type="text"
            placeholder="Search For Assignments"
            className="form-control w-25 ms-0"
          />
        </div>
        <div className="col">
          <a className="btn btn-secondary float-end ms-1">
            <FaEllipsisV className="ms-1" />
          </a>
          <button type="button" className="btn btn-danger float-end ms-1">
            <FaPlus />
            Assignment
          </button>
          <button type="button" className="float-end btn btn-secondary">
            <FaPlus style={{ color: "#ffffff" }} />
            Group
          </button>
        </div>
      </div>
    </div>
  );
};

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {<AssignmentSearchBar />}
      <hr className="hr-grow"></hr>
      <div className="row">
        <ul className="list-group">
          <div className="col-11">
            <li className="list-group-item list-group-item-secondary"
              style={{ paddingLeft: "0px", paddingBottom: "0px", paddingRight: "0px", margin: "15px" }}>
              <div>
                <FaGripVertical className="me-2" /> ASSIGNMENTS
                <span className="float-end">
                  <div className="float-end pt-2">
                    <FaEllipsisV style={{ color: "#434447" }} />
                  </div>
                  <div className="float-end me-4 ms-2">
                    <FaPlus style={{ color: "#878885" }} />
                  </div>
                  <label className="border border-dark rounded-pill float-end p-1">
                    {40}% of Total
                  </label>
                </span>
              </div>
              <ul className="list-group border-start border-3 border-success" style={{ marginTop: "20px" }}>
                {assignmentList.map((assignment) => (
                  <li className="list-group-item">
                    <FaGripVertical
                      className="float-start me-3 fs-5"
                      style={{ color: "black" }}
                    />
                    <FaEdit
                      className="float-start me-3 fs-5 text-success"
                      style={{ color: "black" }}
                    />
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}</Link>

                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>))}
              </ul>
            </li>
          </div>

        </ul>
      </div>
    </>
  );
}
export default Assignments;
import React, {useState} from "react";
import { FaCheckCircle, FaTrash, FaEdit, FaGripVertical, FaEllipsisV, FaPlusCircle, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
} from "./assignmentsReducer";
import "./index.css";

const AssignmentSearchBar = ({ courseId, assignment }:
  {
    courseId: any, assignment: any
  }) => {

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
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/AddAssignment`}
            className="btn btn-danger float-end ms-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaPlus />
            Assignment
          </Link>
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
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const dispatch = useDispatch();
  const assignment = assignments.filter(
    (assignment: any) => assignment.course === courseId
  );
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [assignmentIdToDelete, setAssignmentIdToDelete] = useState(null);

  const handleDelete = (id: any) => {
    setAssignmentIdToDelete(id);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    dispatch(deleteAssignment(assignmentIdToDelete));
    setShowConfirmation(false);
    setAssignmentIdToDelete(null);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setAssignmentIdToDelete(null);
  };

  return (
    <>
      {<AssignmentSearchBar courseId={courseId} assignment={assignment} />}
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
                {assignment.map((assignment: any) => (
                  <li className="list-group-item">
                    <button
                       onClick={() => handleDelete(assignment._id)}
                      className="btn btn-danger float-end"
                      style={{ fontSize: "12px" }}
                    >
                      <FaTrash />
                    </button>
                    {showConfirmation && assignmentIdToDelete === assignment._id && (
                      <div className="confirmation-dialog">
                        <p>Are you sure you want to remove the assignment?</p>
                        <button onClick={confirmDelete}>Yes</button>
                        <button onClick={cancelDelete}>No</button>
                      </div>
                    )}
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
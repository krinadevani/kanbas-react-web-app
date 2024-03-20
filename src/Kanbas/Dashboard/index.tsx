import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {

    const handleInputChange = (e: any) => {
        const { id, value } = e.target;
        setCourse((prevCourse: any) => ({ ...prevCourse, [id]: value }));
    };

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <h5>Course</h5>
            <div className="full-screen-div container">
                <form className="row g-3">
                    <div className="row">
                        {["name", "number", "startDate", "endDate"].map((field) => (
                            <div key={field} className="mb-1 col-md-6">
                                <label htmlFor={field} className="form-label">
                                    {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                                </label>
                                <input
                                    type={field.includes("Date") ? "date" : "text"}
                                    id={field}
                                    value={course[field]}
                                    className="form-control"
                                    onChange={handleInputChange}
                                />
                            </div>
                        ))}
                    </div>
                </form>
                <div className="d-flex justify-content-end">
                    <button type="button" onClick={addNewCourse} className="btn btn-success m-2">
                        Add
                    </button>
                    <button type="button" onClick={updateCourse} className="btn btn-primary m-2">
                        Update
                    </button>
                </div>
            </div>
            {/* <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse}>
        Update
      </button> */}
            <hr />
            <h2>Published Courses (12)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link
                                        to={`/Kanbas/Courses/${course._id}`}
                                        style={{ textDecoration: "none", color: "black" }}
                                    >
                                        <h5 className="card-title bg-white">
                                            {course.number} {course.name}
                                        </h5>
                                        <p className="card-text">
                                            Start Date: {course.startDate} | End Date: {course.endDate}
                                        </p>
                                        <i className="fa-solid fa-file-pen" style={{ fontSize: "20px" }}></i>
                                        {/* <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link> */}
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                            className="btn btn-warning m-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }}
                                            className="btn btn-danger m-1"
                                        >
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
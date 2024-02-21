import React, { ReactNode, useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import {
    FaGripVertical,
    FaPlus,
    FaLink,
} from "react-icons/fa";

import { useParams } from "react-router";
import Toolbar from "./Components/Toolbar";

function ModuleList() {
    const { courseId } = useParams();
    const modulesList = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);
    return (
        <>
            {<Toolbar />}
            <div className="row mt-5">
                <ul className="list-group">
                    {modulesList.map((module, index) => (
                        <li key={index}
                            className="list-group-item list-group-item-secondary"
                            style={{paddingLeft : "0px", paddingBottom:"0px", paddingRight:"0px", margin:"15px"}}
                            onClick={() => setSelectedModule(module)}>
                            <div className="flex-row">
                                <FaGripVertical className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <FaEllipsisV
                                        className="float-end pt-1"
                                        style={{ color: "#050505" }}
                                    />
                                    <FaPlus
                                        className="float-end me-3 pt-1"
                                        style={{ color: "#85897e" }}
                                    />
                                    <span className="dropdown">
                                        <button
                                            className="btn btn-muted dropdown-toggle float-end pt-0"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <FaCheckCircle className="text-success" />
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        ></ul>
                                    </span>
                                </span>
                            </div>
                            {selectedModule._id === module._id && (
                                <ul className="list-group border-start border-3 border-success" style={{marginTop: "20px"}}>
                                    {module.lessons?.map((lesson, index) => (
                                        <li className="list-group-item" key={index}>
                                            <FaEllipsisV className="me-2" />
                                            {lesson.name}
                                            <span className="float-end">
                                                <FaCheckCircle className="text-success" />
                                                <FaEllipsisV className="ms-2" />
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default ModuleList;
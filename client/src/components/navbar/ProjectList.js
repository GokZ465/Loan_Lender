import "./ProjectList.css";

import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No request yet</p>}
      {projects.map((project) => (
        <Link to={`/loans/${project.id}`} key={project.id}>
          <h4> {project.name}</h4>
          <h5>Requested by {project.createdBy.displayName}</h5>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          {console.log(project)}
          <div className="assigned-to">
            {project.assignedUsersList.map((user) => (
              <li key={user.photoURL}>
                <Avatar src={user.photoURL} />
              </li>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

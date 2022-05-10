import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Avatar from "../../components/navbar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const { navigate } = useNavigate();
  const handleClick = (e) => {
    deleteDocument(project.id);
    navigate.push("/");
  };
  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>Requested By {project.createdBy.displayName}</p>
        <p className="due-date">
          Request expires by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Requested loan from</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Delete Request
        </button>
      )}
    </div>
  );
}

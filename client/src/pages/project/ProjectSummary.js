import React from "react";
import { useHistory, useNavigate } from "react-router-dom";
import Avatar from "../../components/navbar/Avatar";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  let navigate = useNavigate();
  const handleClick = (e) => {
    deleteDocument(project.id);
    navigate("/");
  };

  const handleApprove = () => {
    navigate("/pay");
  };
  const handleReject = () => {
    navigate("/pending");
  };
  return (
    <div>
      <div className="project-summary">
        <h1 className="page-title">Sum of {project.name}</h1>
        <p>Requested By {project.createdBy.displayName}</p>
        <h4>Tenure in months : {project.tenure}</h4>
        <h4>Interest Percentage : {project.interest} %</h4>
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
      {user.uid === project.createdBy.id ? (
        <button className="btn" onClick={handleClick}>
          Delete Request
        </button>
      ) : (
        <div className="btn-container">
          <button
            style={{ margin: "10px" }}
            className="btn"
            onClick={handleApprove}
          >
            Approve Loan
          </button>
          <button
            style={{ margin: "10px", borderColor: "red", color: "red" }}
            className="btn btn-reject"
            onClick={handleReject}
          >
            Reject Loan
          </button>
        </div>
      )}
    </div>
  );
}

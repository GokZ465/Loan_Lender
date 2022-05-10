import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";
import Select from "react-select";

import "./Create.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

import { timestamp } from "../../fireBaeDateBae/config";
import { useNavigate } from "react-router-dom";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

export default function Create() {
  let navigate = useNavigate();

  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const { addDocument, response } = useFirestore("projects");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const [interest, setInterest] = useState("");
  const [tenure, setTenure] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    if (documents) {
      setUsers(
        documents.map((user) => {
          return { value: { ...user, id: user.id }, label: user.displayName };
        })
      );
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    // if (!category) {
    //   setFormError('Please select a  category.')
    //   return
    // }
    if (assignedUsers.length < 1) {
      setFormError("Please assign the request to at least 1 user");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        uid: u.value.id,
      };
    });

    const project = {
      name,
      details,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      tenure,
      interest,
      comments: [],
      assignedUsersList,
      createdBy,
    };

    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };

  //   useEffect(() => {
  //     if (response.success) {
  //       setName("");
  //       setDueDate("");
  //       setDetails("");
  //       setAssignedUsers([]);
  //       setTenure("");
  //       setInterest("");
  //     }
  //   }, [response.success]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create a Loan Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Loan Amount</span>
          <input
            required
            type="number"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          <span>Expires:</span>
          <input
            required
            type="date"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>

        <label>
          <span>Tenure:</span>
          <input
            type="number"
            required
            onChange={(e) => {
              setTenure(e.target.value);
            }}
            value={tenure}
          />
        </label>
        <label>
          <span>Interest Rate:</span>
          <input
            type="number"
            required
            onChange={(e) => {
              setInterest(e.target.value);
            }}
            value={interest}
          />
        </label>
        <label>
          <span>Details:</span>
          <textarea
            className="textarea"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>

        <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>

        <button className="btn">Add Request</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}

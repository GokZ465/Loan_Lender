import { useState } from "react";
import Sidebar from "../../components/navbar/Sidebar";
// import { useSignup } from "../../hooks/useSignup";

import styles from "./Profile.module.css";

export default function Profile() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");
  // const { signup, isPending, error } = useSignup();
  // const [thumbnail, setThumbnail] = useState(null);
  // const [aadhaar, setAadhaar] = useState(null);
  // const [thumbnailError, setThumbnailError] = useState(null);
  // const [aadhaarError, setAadhaarError] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signup(email, password, displayName, thumbnail);
  //   console.log(thumbnail);
  // };
  // const handleFileChange = (e) => {
  //   setThumbnail(null);
  //   let selected = e.target.files[0];
  //   console.log(selected);

  //   if (!selected) {
  //     setThumbnailError("Please select a file");
  //     return;
  //   }
  //   if (!selected.type.includes("image")) {
  //     setThumbnailError("Selected file must be an image");
  //     return;
  //   }
  //   if (selected.size > 100000) {
  //     setThumbnailError("Image file size must be less than 100kb");
  //     return;
  //   }

  //   setThumbnailError(null);
  //   setThumbnail(selected);
  //   console.log("thumbnail updated");
  // };

  // const handleAadhaarChange = (e) => {
  //   setAadhaar(null);
  //   let selected = e.target.files[0];
  //   console.log(selected);

  //   if (!selected) {
  //     setAadhaarError("Please select a file");
  //     return;
  //   }
  //   if (!selected.type.includes("image")) {
  //     setAadhaarError("Selected file must be an image");
  //     return;
  //   }
  //   if (selected.size > 100000) {
  //     setAadhaarError("Image file size must be less than 100kb");
  //     return;
  //   }

  //   setAadhaarError(null);
  //   setAadhaar(selected);
  
  //   console.log("Aadhaar updated");
  // };

  return (
    <div>
      {/* <Sidebar /> */}
    <div className={styles.main}>
      <form className={styles["signup-form"]}>
        <div id="column">
          <h2>Basic Details:</h2>
          <label>
            <span>Address</span>
            <input type="textarea" />
          </label>
          <label>
            <span>Pincode</span>
            <input type="text" />
          </label>
          <label>
            <span>DOB</span>
            <input type="date" />
          </label>
          <label>
            <span>Change Photo</span>
            <input type="file"></input>
          </label>
        </div>
        <div id="column">
          <h2>Bank Details</h2>
          <label>
            <span>Acc No</span>
            <input type="number" />
          </label>
          <label>
            <span>Bank Name</span>
            <input type="text" />
          </label>
          <label>
            <span>Branch</span>
            <input type="text" />
          </label>
          <label>
            <span>IFSC Code</span>
            <input type="text" />
          </label>
        </div>
        <div>
          <h2>Current Status</h2>
          <label>
            <span>Status</span>
            <select id="cars" name="cars">
              <option value="volvo">Student</option>
              <option value="saab">Employed</option>
              <option value="fiat">UnEmployed</option>
              <option value="audi">Retired</option>
            </select>
          </label>
          <label></label>
          <label>
            <span>Current CTC(in lakhs)</span>
            <input type="number" />
          </label>
          <label>
            <span>Company</span>
            <input type="text" />
          </label>
        </div>
        <div>
          <h2>Upload Documents</h2>
          <label>
            <span>Aadhar</span>
            <input type="file" />
          </label>
          <label>
            <span>PAN</span>
            <input type="file" />
          </label>
          <label>
            <span>Salary Slip(if applicable)</span>
            <input type="file" />
          </label>
        </div>
        
        {/* <label>
        <span>Full name:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Photo:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>Adhaar Card:</span>
        <input required type="file" onChange={handleAadhaarChange} />
        {aadhaarError && <div className="error">{aadhaarError}</div>}
      </label>
      {!isPending && <button className="btn">sign up</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>} */}
      </form>
    </div>
    </div>
  );
}

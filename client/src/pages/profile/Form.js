import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Profile.module.css";


export default function Form() {
  return (
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
        <a
         href="/profile"
        >
          Submit
        </a>
      </form>
    </div>
  );
}

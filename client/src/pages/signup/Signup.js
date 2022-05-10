import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();
  const [thumbnail, setThumbnail] = useState(null);
  const [aadhaar, setAadhaar] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const [aadhaarError, setAadhaarError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
    console.log(thumbnail);
  };
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 1000000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  const handleAadhaarChange = (e) => {
    setAadhaar(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setAadhaarError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setAadhaarError("Selected file must be an image");
      return;
    }
    if (selected.size > 1000000) {
      setAadhaarError("Image file size must be less than 100kb");
      return;
    }

    setAadhaarError(null);
    setAadhaar(selected);
    console.log("Aadhaar updated");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>sign up</h2>
      <label>
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
      {error && <p>{error}</p>}
    </form>
  );
}

import { useState } from "react";
import Avatar from "../../components/navbar/Avatar";
import Sidebar from "../../components/navbar/Sidebar";
import { useAuthContext } from "../../hooks/useAuthContext";
// import { useSignup } from "../../hooks/useSignup";

import styles from "./Profile.module.css";
export default function Profile() {
  const [count,setCount] = useState(true)
  const {user} = useAuthContext()


  return (
    <div>
      {/* <Sidebar /> */}
      
        <section className={styles["page-contain"]}>
          {/* <button onClick={check}>Checkout</button> */}
          <a href ="/form"className={styles["data-card"]}>
            <div className={styles["imgg"]}>
          <Avatar src={user.photoURL} />
            </div>
            <h4>{user.displayName}</h4>
            <h5>{user.email}</h5>
            <p>Amount Left</p>
            <span className={styles["link-text"]}>
              Click to complete Registration
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill="#753BBD"
                />
              </svg>
            </span>
          </a>
        </section>

      
    </div>
  );
}

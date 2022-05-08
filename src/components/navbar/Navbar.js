import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../../components/navbar/Avatar";

// styles
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>LoanLender</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            {/* <li>{user.displayName}</li> */}

            {<Avatar src={user.photoURL}></Avatar>}
            <li>
              <Link to="/dashboard">dashboard</Link>
            </li>
            <li>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logging out
                </button>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

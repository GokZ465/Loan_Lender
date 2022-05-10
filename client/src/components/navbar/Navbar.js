import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import Avatar from "../../components/navbar/Avatar";

// styles
import styles from "./Navbar.module.css";
import { Navigate } from "react-router-dom";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to="/">LoanLender</Link>
        </li>

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
            <li>
              {!isPending && (
                <button
                  className="btn"
                  onClick={logout}
                  element={<Navigate to="/" replace />}
                >
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

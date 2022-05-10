import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles["mai"]}>
      <div>
        <header className={styles["showcase"]}>
          <div className={styles["content"]}>
            <div className={styles["title"]}>LoanLender</div>
            <div className={styles["text"]}>
              Borrow and lend your money to help others and get interest
            </div>
          </div>
        </header>

        <section className={styles["services"]}>
          <div className={styles["container grid-3 center"]}>
            <div>
              <i className={styles["fab fa-youtube fa-3x"]}></i>
              <h3>How it works?</h3>
              <p>
                A user can login and ask for a loan for a specific amount based on certain criteria which is calculated based on their past loans and current income. One can also lend their money to these requests so as to help others and as well as earn money through interests
              </p>
            </div>
            <div>
              <i className={styles["fas fa-chalkboard-teacher fa-3x"]}></i>
              <h3>How Safe is it?</h3>
              <p>
                The payment is managed and processed completely by stripe, a reputed payment company that is used widely in software products.
              </p>
            </div>
            <div>
              <i className={styles["fas fa-briefcase fa-3x"]}></i>
              <h3>Who can use it?</h3>
              <p>
                Users will give their current status including their past dues, incomes and some documents, which will be processed by the admins and approved.
              </p>
            </div>
          </div>
        </section>

        <footer className={styles["center bg-dark"]}>
          <p></p>
        </footer>
      </div>
    </div>
  );
};

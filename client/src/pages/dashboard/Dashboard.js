import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles["mai"]}>
    <div>
       <header className={styles["showcase"]}>
    <div className={styles["content"]}>
      <img src="https://image.ibb.co/ims4Ep/logo.png" className={styles["logo"]} alt="Traversy Media"></img>
      <div className={styles["title"]}>
        Welcome To Traversy Media
      </div>
      <div className={styles["text"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vel.
      </div>
    </div>
  </header>

  <section className={styles["services"]}>
    <div className={styles["container grid-3 center"]}>
      <div>
        <i className={styles["fab fa-youtube fa-3x"]}></i>
        <h3>YouTube</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <i className={styles["fas fa-chalkboard-teacher fa-3x"]}></i>
        <h3>Courses</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
      <div>
        <i className={styles["fas fa-briefcase fa-3x"]}></i>
        <h3>Freelancing Projects</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, reiciendis!</p>
      </div>
    </div>
  </section>

  <section className={styles["about bg-light"]}>
    <div className={styles["container"]}>
      <div className={styles["grid-2"]}>
        <div className={styles["center"]}>
          <i className={styles["fas fa-laptop-code fa-10x"]}></i>
        </div>
        <div>
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eos aperiam labore consectetur maiores ea magni exercitationem
            similique laborum sed, unde, autem vel iure doloribus aliquid. Aspernatur explicabo consectetur consequatur non
            nesciunt debitis quos alias soluta, ratione, ipsa officia reiciendis.</p>
        </div>
      </div>
    </div>
  </section>

  <footer className={styles["center bg-dark"]}>
    <p>Traversy Media &copy; 2018</p>
  </footer>
    </div>
    </div>
  );
};
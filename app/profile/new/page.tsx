"use client";

import CandidateForm from "@/components/CandidateForm";
import styles from "./page.module.scss";
import image from "@/app/assets/createProfile.svg";
import Container from "@/components/Container";
import Image from "next/image";
import { useState } from "react";
import EmployerForm from "@/components/EmployerForm";
import { motion } from "framer-motion";

const Page = () => {
  const [form, setForm] = useState("candidate");

  return (
    <main className={styles.page}>
      <Container className={styles.mobile}>
        <h2>Create your Profile</h2>
        <p>Unlock Your Career Potential and Connect with Opportunities</p>
      </Container>
      <Container className={styles.container}>
        <div className={styles.left}>
          <h2>Create your profile</h2>
          <p>Unlock Your Career Potential and Connect with Opportunities</p>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => setForm("candidate")}
              className={`${form === "candidate" ? styles.active : ""}`}
            >
              Candidate
            </button>
            <button
              onClick={() => setForm("employer")}
              className={`${form !== "candidate" ? styles.active : ""}`}
            >
              Employer
            </button>
          </div>
          {form === "candidate" ? <CandidateForm /> : <EmployerForm />}
        </div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className={styles.right}
        >
          <Image src={image} alt="create profile" height={500} width={500} />
        </motion.div>
      </Container>
    </main>
  );
};
export default Page;

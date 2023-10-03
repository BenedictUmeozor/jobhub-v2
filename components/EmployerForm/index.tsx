import styles from "./employer.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const EmployerForm = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        exit={{ x: "100%", opacity: 1 }}
        className={styles.form}
      >
        <form>
          <div className={styles.field}>
            <input type="text" placeholder="Company name" />
            <div className={styles.line}></div>
          </div>
          <div className={styles.field}>
            <input type="url" placeholder="Company website" />
            <div className={styles.line}></div>
          </div>
          <div className={styles.field}>
            <textarea placeholder="Company description" rows={6}></textarea>
            <div className={styles.line}></div>
          </div>
          <button>Create your profile</button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};
export default EmployerForm;

import { useState } from "react";
import styles from "../styles/Feedback.module.css";
import css from "classnames";

export default function Feedback({ variant, message}) {
    const [isShown, setIsShown] = useState(true);

    const handleClose = (e) => {
        e.preventDefault();
        setIsShown(false);
    }

    return(
        <div
        className={css(styles.alert, styles[variant], !isShown && styles.hide)}>
            <span className={styles.closebtn} onClick={handleClose}>
                &times;
            </span>
            {message}
        </div>
    )
}
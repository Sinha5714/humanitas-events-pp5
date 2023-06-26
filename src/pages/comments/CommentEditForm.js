import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";

function CommentEditForm(props) {
    const { id, content, setShowEditForm, setComments, setShowAlert } = props;

    const [formContent, setFormContent] = useState(content);

    const handleChange = (event) => {
        setFormContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        await axiosRes.put(`/comments/${id}/`, {
            content: formContent.trim(),
        });
        setComments((prevComments) => ({
            ...prevComments,
            results: prevComments.results.map((comment) => {
            return comment.id === id
                ? {
                    ...comment,
                    content: formContent.trim(),
                    updated_at: "now",
                }
                : comment;
            }),
        }));
        setShowEditForm(false);
        setShowAlert(true);
        } catch (err) {
            // console.log(err)
        }
    };

    return (
        <Form className="mt-2 text-center" onSubmit={handleSubmit}>
        <Form.Group className="pr-1">
            <Form.Control
            className={styles.Form}
            as="textarea"
            value={formContent}
            onChange={handleChange}
            rows={2}
            />
        </Form.Group>
        <div className="text-right">
            <button
            className={styles.Button}
            onClick={() => {
                setShowEditForm(false);
                setShowAlert(false)}}
            type="button"
            >
            cancel
            </button>
            <button
            className={styles.Button}
            disabled={!content.trim()}
            onMouseDown={(e) => e.preventDefault()}
            type="submit"
            >
            save
            </button>
        </div>
        </Form>
    );
}

export default CommentEditForm;
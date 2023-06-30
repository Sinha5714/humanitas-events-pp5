// React imports
import React, { useState } from "react";
// Bootstrap imports
import Form from "react-bootstrap/Form";
// CSS imports
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Buttons.module.css";
// Component imports
import { axiosRes } from "../../api/axiosDefaults";

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
          className={btnStyles.CancelButton}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            setShowEditForm(false);
            setShowAlert(false);
          }}
          type="button"
        >
          cancel
        </button>
        <button
          className={btnStyles.Button}
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

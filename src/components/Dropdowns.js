import styles from "../styles/Dropdowns.module.css";

import React from "react";

import Dropdown from "react-bootstrap/Dropdown";

const ThreeDots = React.forwardRef(({ onClick }, ref ) => (
    <i
      className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
));
ThreeDots.displayName = "ThreeDots";
export const EditDeleteDropdown = ({handleEdit, handleDelete}) => {

    return (
        <>
            <Dropdown className="ml-auto" drop="left">
                <Dropdown.Toggle as={ThreeDots} />

                <Dropdown.Menu
                className="text-center"
                popperConfig={{ strategy: "fixed" }}
                >
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit"
                >
                    <i className="fas fa-pencil" />
                </Dropdown.Item>
                <Dropdown.Item
                    className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete"
                >
                    <i className="far fa-trash-alt" />
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </>
    );
};



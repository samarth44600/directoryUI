import React from "react";

//IMPORTING ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function File({ name, styles }) {
  return (
    <div className={styles.fileDiv}>
      <FontAwesomeIcon className={styles.fileIcon} icon={faFile} />
      {name}
    </div>
  );
}

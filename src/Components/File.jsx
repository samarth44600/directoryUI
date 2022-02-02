import React from "react";

//IMPORTING ICON
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function File({ name, styles }) {
  return (
    <div>
      <FontAwesomeIcon className={styles.icon} icon={faFile} />
      {name}
    </div>
  );
}

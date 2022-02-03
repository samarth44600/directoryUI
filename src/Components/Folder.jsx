import React, { useState } from "react";

//IMPORTING ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

//IMPORTING FILE COMPONENT
import File from "./File";

//IMPORTING STYLES
import styles from "../Styles/folder.module.scss";
export default function Folder({ name, content }) {
  const [isExpanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!isExpanded);
  };
  console.log(isExpanded);
  return (
    <div className={styles.mainDiv}>
      <div className={styles.rootDiv} onClick={expand}>
        <FontAwesomeIcon
          className={styles.folderIcon}
          icon={!isExpanded ? faFolder : faFolderOpen}
        />
        {name} <span>({content.length})</span>
      </div>
      <div className={styles.folderContent}>
        {isExpanded &&
          content &&
          content.map((children, index) => {
            switch (children.isFolder) {
              case true:
                return (
                  <Folder
                    name={children.name}
                    content={children.content}
                    icon={children.isFolder}
                    key={index}
                  />
                );
              case false:
                return (
                  <File styles={styles} key={index} name={children.name} />
                );
              default:
                console.log("Error");
            }
          })}
      </div>
    </div>
  );
}

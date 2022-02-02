import React, { useState } from "react";

//IMPORTING ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder,
  faFolderOpen,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

//IMPORTING FILE COMPONENT
import File from "./File";
export default function Folder({ name, content, icon, style }) {
  const [isExpanded, setExpanded] = useState(false);
  const expand = () => {
    setExpanded(!isExpanded);
  };
  console.log(isExpanded);
  return (
    <div>
      <div onClick={expand}>
        <FontAwesomeIcon icon={!isExpanded ? faFolder : faFolderOpen} />
        {name} <span>({content.length})</span>
      </div>
      {/* eslint-disable-next-line array-callback-return */}
      {content.map((children, index) => {
        switch (children.isFolder) {
          case true:
            return (
              <div>
                <Folder
                  name={children.name}
                  content={children.content}
                  icon={children.isFolder}
                  key={index}
                />
              </div>
            );
          case false:
            return (
              <div>
                <File key={index} name={children.name} />
              </div>
            );
          default:
            console.log("Error");
        }
      })}
    </div>
  );
}

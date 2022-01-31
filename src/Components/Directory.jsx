import React from "react";
import directoryData from "../Utils/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFile } from "@fortawesome/free-solid-svg-icons";
export default function Directory() {
  let looping = (data) => data.name;
  const rootContent = directoryData.content;

  //   const insideRoot = rootContent.map(looping);
  let icons;
  let mapping = rootContent.map((data) => {
    const iconCheck = data.isFolder;
    if (iconCheck === true) {
      icons = <FontAwesomeIcon icon={faFolder} />;
      console.log(true);
    } else {
      icons = <FontAwesomeIcon icon={faFile} />;
      console.log(false);
    }
    rootContent.map(looping);
  });

  return (
    <div>
      {directoryData.name}

      <div>
        {icons}
        {/* <p>{insideRoot}</p> */}
        {mapping}
        {/* {
            iconCheck = data.isFolder;
            if (iconCheck === true) {
              icons = <FontAwesomeIcon icon={faFolder} />
            //   {console.log(true);}
            } else {
              icons = <FontAwesomeIcon icon={faFile} />
            //   console.log(false);
            }
          }); */}
      </div>
    </div>
  );
}

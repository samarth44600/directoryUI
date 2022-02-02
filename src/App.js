import styles from './App.module.scss'

// IMPORTING COMPONENTS
import Folder from "./Components/Folder";

//IMPORTING DATA
import directoryData from "./Utils/Data";

function App() {
  return (
    <div className={styles.App}>
      <h1>Directory UI</h1>
      <Folder name={directoryData.name} content={directoryData.content} icon={directoryData.isFolder}/>
    </div>
  );
}

export default App;

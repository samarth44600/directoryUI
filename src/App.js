import style from './App.module.scss'

// IMPORTING COMPONENTS
import Folder from "./Components/Folder";

//IMPORTING DATA
import directoryData from "./Utils/Data";

function App() {
  return (
    <div className={style.App}>
      <h1>Hello World</h1>
      <Folder style={style} name={directoryData.name} content={directoryData.content} icon={directoryData.isFolder}/>
    </div>
  );
}

export default App;

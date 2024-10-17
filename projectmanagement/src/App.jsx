import { useState } from 'react';
import './App.css';
import ProjectsSidebar from './components/ProjectsSidebar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,  // Changed to match the logic
    projects: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null,  // Consistency in naming
    }));
  }

  function handleAddProject(){
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
    })
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;

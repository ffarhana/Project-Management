import { useState } from 'react'
import './App.css'
import ProjectsSidebar from './components/ProjectsSidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen">
      <ProjectsSidebar />
    </main>
  )
}

export default App

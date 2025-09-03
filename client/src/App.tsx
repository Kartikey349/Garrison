import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {

  const isOwnerPath = useLocation().pathname.includes("owner")

  return (
    <div className="overflow-x-hidden">
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
        </Routes>
      </div>
    </div>

  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router"
import WebLayout from "./layouts/WebLayout"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
      <WebLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </WebLayout>
    </BrowserRouter>
  )
}

export default App

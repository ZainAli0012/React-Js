
import Navbar from "../components/Navbar"

const WebLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />

      <main>{children}</main>

      <footer className="bg-slate-900 px-6 py-6 text-center text-sm text-slate-300">
        © 2026 EmployeeHub. All rights reserved.
      </footer>
    </div>
  )
}

export default WebLayout

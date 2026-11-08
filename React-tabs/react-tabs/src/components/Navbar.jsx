
import { NavLink } from "react-router"

const Navbar = () => {
  const links = [
    { name: "Home", id: "home" },
    { name: "Employees", id: "employees" },
    { name: "Shortlist", id: "shortlist" },
    { name: "About", id: "about" }
  ]

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <NavLink
          to="/#home"
          onClick={(event) => {
            event.preventDefault()
            scrollToSection("home")
          }}
          className="rounded text-2xl font-bold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          EmployeeHub
        </NavLink>

        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={`/#${link.id}`}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(link.id)
              }}
              className="rounded-lg px-4 py-2 text-sm font-medium transition hover:bg-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

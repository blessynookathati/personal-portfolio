import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-primary/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-2xl font-bold text-cyan-400">Blessy Roy</h1>
        <div className="space-x-6 hidden md:flex">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-cyan-400 capitalize"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
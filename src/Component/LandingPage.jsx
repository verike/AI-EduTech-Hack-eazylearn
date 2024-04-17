import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 w-full fixed top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-bold">EazyLearn</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Courses</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-4">
      <p>&copy; 2024 EazyLearn. All rights reserved.</p>
    </footer>
  );
};

export const LandingPage = () => {
  return (
    <div>
     <div >
     <Navbar />
     </div>
      <div className="flex h-screen bg-blue-600 py-20 items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-white font-bold mb-4">Welcome to EazyLearn</h1>
          <p className="text-lg text-white mb-8">The best platform to enhance your knowledge</p>
          <div>
            <button className="btn btn-primary mr-4"><Link to="/login">Login</Link></button>
            <button className="btn btn-secondary"><Link to="/signup">Register</Link></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

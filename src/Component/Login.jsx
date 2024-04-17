import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
     try {
      const response = await axios.post('https://ai-edutech-hack-server.onrender.com/api/v1/user/sign-in', 
      { email },
      {
        headers:{
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"
        },
      },
    ); // POST request to backend login endpoint
      console.log('Login successful:', response.data);
      // Redirect user to dashboard or homepage upon successful login
      navigate('/home');

      // Assuming the API returns a token upon successful login
      const token = response.data.token;
      const userId = response.data.userId;

      // Save the token to localStorage or session storage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Display error message to the user
      // You can update state to show error message or use any other method to inform the user about the login failure
    } finally {
      setLoading(false); // Reset loading state
    }
    console.log('Signing in...');
  };
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

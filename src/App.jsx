import './App.scss'
import Login from './pages/login/login';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Signup from './pages/signup/signup';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/home/home';
import Navbar from './components/Navbar/navbar';
import Room from './pages/room/room';
import Profile from './pages/profile/profile';

const queryClient = new QueryClient();

function App() {
  const { userToken } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div >
    );
  }
  const ProtectedRoute = ({ children }) => {
    if (!userToken) {
      return <Navigate to="/login" />
    }
    else {
      return children;
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        },
        {
          path: '/room/:id',
          element: <Room />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} className="main" />
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App

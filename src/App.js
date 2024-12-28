
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import HomePage from './pages/home/home.page';
import Acceuil from './pages/home/acceuil.page';
import Banier from './pages/banniere/banier';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Acceuil />,
    exact: true,
    children:[
      {
        path:'/',
        element: <HomePage />,
      }
    ]
  }
])
function App() {
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;

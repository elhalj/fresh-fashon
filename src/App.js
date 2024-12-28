
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/home.page';
import Acceuil from './pages/home/acceuil.page';
import Catalogue from './pages/catalogue/catalogue';
import { useMemo } from 'react';
import Footer from './pages/footer/foot';




function App() {
  const router = useMemo(() => createBrowserRouter([
    {
      path: "/",
      element: <Acceuil />,
      exact: true,
      children:[
        {
          path:'/',
          element:<HomePage />
        },
        {
          path:'catalogue',
          element: <Catalogue />,
        }
      ]
    }
  ]),[])
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;

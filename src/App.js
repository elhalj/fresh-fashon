
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
import HomePage from './pages/home/home.page';
import Acceuil from './pages/home/acceuil.page';
import Catalogue from './pages/catalogue/catalogue';
import { useMemo } from 'react';
import Footer from './pages/footer/foot';
import CatalogueId from './pages/catalogue/CatalogueId';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';
import Panier from './components/Panier';




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
        },
        {
          path:'catalogue/:id',
          element: <CatalogueId />,
        },
        {
          path:'login',
          element: <Login />,
        },
        {
          path:'signUp',
          element: <SignUp />,
        },
        {
          path:'panier',
          element:<Panier />
        }
      ]
    }
  ]),[])
  return (
    
      <RouterProvider router={router} />
    
  );
}

export default App;

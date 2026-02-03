import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Support from './components/Mido/Support/Support'
import Subscription from './components/Mariem/Subscription'
import MoviesAndShows from './components/Hazem/MoviesAndShows'
import AllComp from './components/Seif/AllComp'
import SignUp from './components/Eman/SignUp'
import Login from './components/Hoda/Login'
import MovieDetails from './components/Hazem/MovieDetails'
function App() {
  
  const route = createBrowserRouter([
    {path: "" , element : <Layout />, children : [
      {path : "/" , element : <AllComp />},
      {path: "Mido/Support" , element : <Support/>},
      {path: "Mariem" , element : <Subscription/>},
      { path: "/hazem/:id", element: <MovieDetails /> },
      {path: "hazem" , element : <MoviesAndShows/>},
      {path: "Eman" , element : <SignUp />},
      {path: "Hoda" , element : <Login />},
      {path: "hazem" , element : <MoviesAndShows/>},
    ] }
  ])


  return (
    <RouterProvider router={route}/>
  )
}

export default App

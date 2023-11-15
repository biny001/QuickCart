import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './ui/Home'
import About from './ui/About'
import Product from './features/product/Product';
import Cart from './features/cart/Cart';
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {element:<AppLayout/>,
  children:[
    {path:'/',
   element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/product',element:<Product/>},
    {path:'/cart',element:<Cart/>}
  ]  
}
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>   
  )
}


export default App;



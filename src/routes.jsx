import Home from "./pages/Home/Home.jsx"
import NewUser from "./pages/NewUser/NewUser.jsx"
import Products from "./pages/Products/Products.jsx"
import UserList from "./pages/Users/UserList.jsx"
import Product from "./pages/Product/Product.jsx"
let routes = [
    {path: '/' , element: <Home/>},
    {path: '/users' , element: <UserList/>}, 
    {path: '/newUser' , element: <NewUser/>},
    {path: '/products' , element: <Products/>},
    {path: '/product/:productID' , element: <Product/>}
]

export default routes

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Single from "./pages/single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './style.scss'


const Layout=()=>{
    return (
      <>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </>
    ) 
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
           {
            path: "/",
            element: <Home/>
          },
          {
            path: "/post/:id",
            element: <Single/>
          },
          {
            path: "/write",
            element: <Write/>
          },

    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (

    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;


// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";

// import Register from "./pages/Register"
// import Login from "./pages/Login"
// import Home from "./pages/Home"
// import Write from "./pages/Write"
// import Single from "./pages/single"
// import Navbar from "./component/Navbar"
// import Footer from "./component/Footer";

// const Layout=()=>{
//     return (
//       <>
//           <Navbar/>
//           <Outlet/>
//           <Footer/>
//       </>
//     ) 
// }


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//            {
//             path: "/",
//             element: <Home/>
//           },
//           {
//             path: "/single",
//             element: <Single/>
//           },
//           {
//             path: "/write",
//             element: <Write/>
//           },

//     ]
//   },

//         {
//            path: "/login",
//             element: <Login/>
//           },
//           {
//             path: "/register",
//             element: <Register/>
//           },
   
// ]);



// function App() {
//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   );
// }



// export default App;

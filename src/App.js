import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
 // Route,
 // Link,
} from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import Task from "./pages/task";
import Location from "./pages/location";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/task",
    element:< Task/>
  },
  
  {
    path: "/location",
    element:< Location/>
  },
  
  
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

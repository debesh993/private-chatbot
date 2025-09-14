
import './App.css'
import Content_layout from './components/Content_layout'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ChatPage from "./components/ChatPage";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:(<Navigate to='/page/new-chat' />),
    },
    {
      path:"/page",
      element:<Content_layout/>,
      children:[
        {
          path:"new-chat",
          element:<ChatPage/>,
        },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App

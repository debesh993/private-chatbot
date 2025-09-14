import Side_bar from './components/Side_bar'

import './App.css'
import Side_bar1 from './components/Side_bar1'
import NewChatButton from './components/NewChatButton'
import { Box } from '@mui/material'
import LearnCards from './components/LearnCards'
import ChatInput from './components/ChatInput'
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
  // return (
  //   <>

  //     {/* <Content_layout/> */}
  //   </>
  // )
}

export default App

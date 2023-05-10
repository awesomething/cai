import {useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Chat from '@/components/chat'
//remove LOGIN after test works
import Login from "@/components/login";

function App() {
  //remove LOGIN after test works
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        {/* remove LOGIN after test works */}
          <Route
            path="/"
            element={
              isAuth ? (
                <Navigate to="/chat" />
              ) : (
                <Login setUser={setUser} setSecret={setSecret} />
              )
            }
          />
          <Route
            path="/chat"
            element={
              isAuth ? (
                <Chat user={user} secret={secret} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
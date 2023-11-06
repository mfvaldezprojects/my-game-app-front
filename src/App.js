import "./Styles/App.css";

import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ResponsiveHeader from "./Components/Header";
import Landing from "./Containers/LandingContainer";
import Login from "./Containers/LoginContainer";
import UserHome from "./Containers/UserHomeContainer";
import CreateCharacter from "./Containers/CreateCharacterContainer";
import AllCharacters from "./Containers/AllCharactersContainer";
import SignUp from "./Containers/SignUpContainer";
import Footer from "./Components/Footer";

function App() {
  const [userState, setUserState] = useState();

  useEffect(() => {
    const sessionUser = JSON.parse(sessionStorage.getItem("userloged"));

    if (!userState) {
      setUserState(sessionUser);
    }
  }, [userState]);

  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveHeader userState={userState} setUserState={setUserState} />
        <Routes>
          <Route exact path="/" element={<Landing userState={userState} />} />
          <Route
            path="/all-characters"
            element={<AllCharacters userState={userState} />}
          />
          {userState ? (
            <>
              <Route
                path="/user-home"
                element={<UserHome userState={userState} />}
              />
              <Route
                path="/create-character"
                element={<CreateCharacter userState={userState} />}
              />
            </>
          ) : (
            <Route
              path="/login"
              element={
                <Login userState={userState} setUserState={setUserState} />
              }
            />
          )}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

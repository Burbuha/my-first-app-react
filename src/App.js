import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import { Route } from "react-router-dom";
import Music from "./components/Music/Music";
import SettingsProfile from "./components/SettingsProfile/SettingsProfile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";

const App = () => {
  debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/users" render={() => <Users />} />
        <Route path="/settings" component={SettingsProfile} />
      </div>
    </div>
  );
};

export default App;

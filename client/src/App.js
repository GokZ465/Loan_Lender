import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";
//import Dashboard

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import Pay from "./pages/payment/Pay";
import ScrollToTop from "./components/navbar/Scrolltotop";
import OnlineUsers from "./components/navbar/OnlineUsers";
import Sidebar from "./components/navbar/Sidebar";
import Create from "./pages/create/Create";
import Project from "./pages/project/Project";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <ScrollToTop />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && user.displayName && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
              <Route path="/pending">
                {!user && user.displayName && <Redirect to="/" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/pay">
                {!user && <Redirect to="/" />}
                {user && <Pay />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/" />}
                {user && <Create />}
              </Route>
              <Route path="/loans/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

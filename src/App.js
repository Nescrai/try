import { useRef, useState } from "react";
import NavBar from "./components/Navigation/NavBar";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import Signout from "./components/Signout/Signout";
import Center from "./components/Center/Center";
import About from "./components/About/About";

function App() {
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const [currentForm, setCurrentForm] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });

  const toHome = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollFunction = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const loadUser = (data) => {
    setUser({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
    setIsSignedIn(true);
  };

  const onRouteForm = (currentForm) => {
    if (currentForm === "signout") {
      setIsSignedIn(false);
    }
    setCurrentForm(currentForm);
  };

  return (
    <div>
      {/* <NavBar
        toHome={toHome}
        homeRef={homeRef}
        scrollFunction={scrollFunction}
        aboutRef={aboutRef}
        onRouteForm={onRouteForm}
      />
      <Center homeRef={homeRef} />
      <About aboutRef={aboutRef} /> */}
    </div>
  );
}

export default App;

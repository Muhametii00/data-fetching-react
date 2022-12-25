import { useState } from "react";
import { Home } from "./components/Home";
import { Counter } from "./components/shared/Counter";
import { Timer } from "./components/shared/Timer";
import { Login } from "./screens/Login/Login";

function App() {
  const [isauthenticated, setisAuchenticated] = useState(true);
  const handleLogin = () => setisAuchenticated(true);

  return (
    <div className="App">
      {isauthenticated ? <Home /> : <Login onLogIn={handleLogin} />}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import LoadingScreen from "./components/loading-screen";
import reset from "styled-reset";
import Layout from "./components/layout";
import ProtectRoute from "./routes/protect-route";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { auth } from "./firebase";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ProtectRoute>
//         <Layout />
//       </ProtectRoute>
//     ),
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "profile",
//         element: <Profile />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/create-account",
//     element: <CreateAccount />,
//   },
// ]);

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #E5C459;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
  }
  h1 {
    font-size: 34px;
    font-weight: 600;
    margin-bottom: 24px;
  }
  button {
    -webkit-tap-highlight-color : transparent;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <ProtectRoute>
            <Layout />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
          </ProtectRoute>
        </Router>
      )}
    </>
  );
}

export default App;

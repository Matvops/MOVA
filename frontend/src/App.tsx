import { Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { MainRouter } from "./routes/MainRouter";
import { Dashboard } from "./pages/Dashboard";

export function App() {

  return (
    <main style={{width: '100vw', height: '100vh'}}>
      <MainRouter>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </MainRouter>
    </main>
  );
}
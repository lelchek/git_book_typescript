import { Routes, Route } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:userLogin" element={<UserPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

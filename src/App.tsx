import Layout from "./layout";
import Home from "./pages/home";

function App() {
  localStorage.setItem("safePin", "1234");
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;

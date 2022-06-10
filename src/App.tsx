import { Provider } from "react-redux";
import Layout from "./layout";
import Home from "./pages/home";
import store from "./redux/store";

function App() {
  localStorage.setItem("safePin", "1234");
  return (
    <Provider store={store}>
      <Layout>
        <Home />
      </Layout>
    </Provider>
  );
}

export default App;

import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import InteractiveDashboard from "./components/interactive-dashboard/interactive-dashboard.component";

function App() {
  // Define function
  const func = (x) => Math.cos(x);

  return (
    <div className="App">
      <Header />
      <InteractiveDashboard />
      <Footer />
    </div>
  );
}

export default App;

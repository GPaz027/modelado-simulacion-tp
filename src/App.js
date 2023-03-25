import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import InteractiveDashboard from "./components/interactive-dashboard/interactive-dashboard.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <InteractiveDashboard />
      <Footer />
    </div>
  );
}

export default App;

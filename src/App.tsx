import { ProgressBar } from "./components/progress";

function App() {
  return (
    <div className="m-10">
      <ProgressBar value={40} isPercentageVisible />
    </div>
  );
}

export default App;

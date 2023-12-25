import { AppState } from "./Providers";
import { AppProvider } from "./routes";

function App() {
  return (
    <AppState>
      <AppProvider />
    </AppState>
  );
}

export default App;

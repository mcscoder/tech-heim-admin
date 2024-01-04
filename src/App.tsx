import { AppState } from "./providers";
import { AppProvider } from "./routes";

function App() {
  return (
    <AppState>
      <AppProvider />
    </AppState>
  );
}

export default App;

import "./App.css";
import { useToast } from "./hooks/useToast";

function App() {
  const { showToast } = useToast();

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() => showToast("This is a Success Toast!", "success")}
        >
          Show Success
        </button>
        <button onClick={() => showToast("This is a Error Toast!", "error")}>
          Show Error
        </button>
        <button
          onClick={() =>
            showToast("This is a Info Message Toast", "info", 5000)
          }
        >
          Show Info
        </button>
        <button
          onClick={() =>
            showToast("All the messages can be editted", "warning", 5000)
          }
        >
          Custom
        </button>
      </div>
    </>
  );
}

export default App;

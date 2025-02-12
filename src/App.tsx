import "./App.css";
import { useToast } from "./hooks/useToast";

function App() {
  const { showToast } = useToast();

  return (
    <>
      <div className="flex gap-2">
        <button
          onClick={() =>
            showToast({ message: "This is a Success Toast!", type: "success" })
          }
        >
          Show Success
        </button>
        <button
          onClick={() =>
            showToast({ message: "This is a Error Toast!", type: "error" })
          }
        >
          Show Error
        </button>
        <button
          onClick={() =>
            showToast({
              message: "This is a Info Message Toast",
              type: "info",
              duration: 5000,
            })
          }
        >
          Show Info
        </button>
        <button
          onClick={() =>
            showToast({ message: "This is a warning!", type: "warning" })
          }
        >
          Show Warning
        </button>
        <button
          onClick={() =>
            showToast({
              render: (
                <div className="bg-red-700 px-2">
                  This is a JSX rendered toast
                </div>
              ),
              type: "default",
              duration: 5000,
            })
          }
        >
          Custom JSX
        </button>
      </div>
    </>
  );
}

export default App;

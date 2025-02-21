import { useState } from "react";
import "./App.css";
import { useToast } from "./hooks/useToast";

function App() {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<string>("0");
  const [data, setData] = useState([]);
  const [URL, setUrl] = useState<string>("");
  const [toastConfig, setToastConfig] = useState({
    message: "This is a test message",
    type: "success",
    position: "top-left",
    duration: 3000,
  });

  const handleTabClick = (index: string) => {
    setActiveTab(index);
  };

  const handleShowToast = () => {
    // @ts-ignore
    showToast(toastConfig);
  };

  const handleTriggerApi = async () => {
    try {
      const response = await fetch(URL);
      const todos = await response.json();
      setData(todos);
      console.log(todos)

      showToast({
        render: (
          <div className="text-xl font-semibold text-green-200 p-2">
            The api call was a success! The api works fine
          </div>
        ),
        type: "success",
      });
    } catch (error) {
      console.error("Error While hitting the api::", error);
      showToast({
        message: "Error while making the api call",
        type: "error",
      });
    }
  };

  return (
    <>
      <div className="">
        {/* Tab Section */}
        <button
          className={`${
            activeTab === "0"
              ? "border-b  border-white mb-4 bg-gray-800 font-semibold"
              : "bg-gray-500  border-red-300"
          }`}
          onClick={() => handleTabClick("0")}
        >
          Types
        </button>

        <button
          className={`${
            activeTab === "1"
              ? "border-b  border-white mb-4 bg-gray-800 font-semibold"
              : "bg-gray-500 border-red-300"
          }`}
          onClick={() => handleTabClick("1")}
        >
          Position
        </button>

        <button
          className={`${
            activeTab === "2"
              ? "border-b  border-white mb-4 bg-gray-800 font-semibold"
              : "bg-gray-500 border-red-300"
          }`}
          onClick={() => handleTabClick("2")}
        >
          API
        </button>

        <button
          className={`${
            activeTab === "3"
              ? "border-b mb-4 bg-gar-800 font-semibold"
              : "bg-gray-500"
          }`}
          onClick={() => handleTabClick("3")}
        >
          Show Warning
        </button>

        <button
          className={`${
            activeTab === "4"
              ? "border-b mb-4 bg-gar-800 font-semibold"
              : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("4")}
        >
          Custom JSX
        </button>

        {/* Tab content */}

        {activeTab === "0" && (
          <div className=" flex flex-col justify-center  gap-2">
            <button
              className=" px-4 py-2 bg-green-400"
              onClick={() => {
                showToast({
                  message: "Success",
                  type: "success",
                });
              }}
            >
              success
            </button>
            <button
              className=" px-4 py-2 bg-red-400"
              onClick={() => {
                showToast({
                  message: "Failure",
                  type: "error",
                });
              }}
            >
              Failure
            </button>
            <button
              className=" px-4 py-2 bg-blue-400"
              onClick={() => {
                showToast({
                  message: "Info!",
                  type: "info",
                });
              }}
            >
              Info
            </button>
          </div>
        )}
        {activeTab === "1" && (
          <div className=" flex flex-col justify-center  gap-2">
            <button
              className=" px-4 py-2 bg-green-400"
              onClick={() => {
                showToast({
                  message: "Success",
                  type: "default",
                  position: "top-left",
                });
              }}
            >
              Top Left
            </button>
            <button
              className=" px-4 py-2 bg-red-400"
              onClick={() => {
                showToast({
                  message: "Failure",
                  type: "error",

                  position: "top-right",
                });
              }}
            >
              Top Right
            </button>
            <button
              className=" px-4 py-2 bg-blue-400"
              onClick={() => {
                showToast({
                  message: "Info!",
                  type: "info",
                  position: "bottom-right",
                });
              }}
            >
              Bottom Right
            </button>
            <button
              className=" px-4 py-2 bg-blue-400"
              onClick={() => {
                showToast({
                  message: "Info!",
                  type: "info",
                  position: "bottom-left",
                });
              }}
            >
              Bottom Left
            </button>
          </div>
        )}
        {activeTab === "2" && (
          <div className=" flex flex-col justify-center  gap-2">
            <input
              className="p-2 border-white rounde-lg"
              type="text"
              placeholder="Enter your url here"
              value={URL}
              onChange={(e) => {
                setUrl(e.target.value);
                console.log("Give URL::", e.target.value);
              }}
            />
            <button
              onClick={() => {
                handleTriggerApi();
              }}
            >
              Get Response
            </button>
          </div>
        )}
        {/* {data} */}
      </div>
    </>
  );
}

export default App;

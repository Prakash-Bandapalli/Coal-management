import { useEffect, useState } from "react";
import WelcomeNav from "../../WelcomeNav";

function Dashboard() {
  const [mines, setMines] = useState([]);
  const [progress, setProgress] = useState("");
  const [selectedMine, setSelectedMine] = useState(null); // Track the selected mine

  function handleEdit(mine) {
    setSelectedMine(mine); // Set the selected mine to open the progress div
  }

  useEffect(() => {
    const storedMines = localStorage.getItem("mines");

    if (storedMines) {
      // Parse the JSON string into an object
      const parsedMines = JSON.parse(storedMines);
      setMines(parsedMines);
    }
  }, []);

  // Function to handle the deletion of a mine
  const handleDelete = (e, id) => {
    e.stopPropagation(); // Prevent triggering handleEdit when delete is clicked
    const updatedMines = mines.filter((mine) => mine.id !== id);
    setMines(updatedMines);

    // Update the local storage
    localStorage.setItem("mines", JSON.stringify(updatedMines));
  };

  // Function to close the progress div
  const handleCloseProgress = () => {
    setSelectedMine(null); // Close the progress div
    setProgress(""); // Reset progress
  };

  return (
    <div className="relative bg-bgcolor min-h-screen px-6">
      {/* Main content that will be blurred */}
      <div className={selectedMine ? "blur-sm" : ""}>
        <WelcomeNav />
        <ul>
          {mines?.map((ele) => {
            return (
              <li
                key={ele.id}
                onClick={() => handleEdit(ele)} // Pass the whole mine object
                className="relative max-w-6xl mx-auto flex flex-col h-[150px] justify-around
            bg-gradient-to-l from-slate-300 to-slate-100 border border-slate-300 p-2 px-4 md:p-3 md:px-6 rounded-lg shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 text-amber-800 mb-5"
              >
                <div className="flex justify-around">
                  <div className="flex items-center justify-center gap-2">
                    <p>Mine name:</p>
                    <h1 className="font-bold text-lg md:text-xl">
                      {ele.zoneName}
                    </h1>
                  </div>
                  <p className="font-bold text-lg md:text-xl">{ele.shift}</p>
                </div>
                <p className="text-center text-black font-semibold">
                  {ele.zone}
                </p>

                {/* Delete Button */}
                <button
                  className="absolute top-11 right-2 rounded-full bg-red-500 text-white px-3 py-1 md:px-4 md:py-2 hover:bg-red-700 duration-200"
                  onClick={(e) => handleDelete(e, ele.id)} // Prevent edit when delete is clicked
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Progress Update Modal */}
      {selectedMine && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg max-w-lg w-full shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-red-600"
              onClick={handleCloseProgress}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2">
              Progress Update for {selectedMine.zoneName}
            </h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter progress details"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
              required
            ></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

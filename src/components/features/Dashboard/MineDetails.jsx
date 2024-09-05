/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import WelcomeNav from "../../WelcomeNav";
import { useLocalStorageState } from "../useLocalStorageState";
const MineDetails = () => {
  const [zoneName, setZoneName] = useState("Zone A");
  const [shift, setShift] = useState("morningshift");
  const [zone, setZone] = useState("ZoneA");
  const [area, setArea] = useState("100");
  const [manpower, setManpower] = useState("50");
  const [progress, setProgress] = useState("");
  const [store, setStore] = useLocalStorageState([], "mines");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new mine object
    const newMine = {
      zoneName,
      shift,
      zone,
      area,
      manpower,
      progress,
      id: Date.now(),
    };

    // Update the store state
    setStore([...store, newMine]);

    // Optionally clear the form fields after submission
    setZoneName("");
    setShift("morningshift");
    setZone("ZoneA");
    setArea("");
    setManpower("");
    setProgress("");
  };

  return (
    <>
      <WelcomeNav />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-800 text-black p-8 rounded-lg shadow-lg w-96">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-white" htmlFor="zone-name">
                Zone Name
              </label>
              <input
                className="w-full p-2 rounded"
                type="text"
                id="zone-name"
                value={zoneName}
                onChange={(e) => setZoneName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-white" htmlFor="shift">
                Shift:
              </label>
              <select
                className="w-full p-2 rounded"
                id="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                required
              >
                <option value="morningshift">Morning shift</option>
                <option value="middleshift">Middle shift</option>
                <option value="nightshift">Night shift</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-white" htmlFor="zone">
                Zone
              </label>
              <select
                className="w-full p-2 rounded"
                id="zone"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                required
              >
                <option value="ZoneA">Zone A</option>
                <option value="ZoneB">Zone B</option>
                <option value="ZoneC">Zone C</option>
                <option value="ZoneD">Zone D</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-white" htmlFor="area">
                Area in Sq.mts
              </label>
              <input
                className="w-full p-2 rounded"
                type="text"
                id="area"
                placeholder="in sq.mts"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-white" htmlFor="manpower">
                Required Manpower
              </label>
              <input
                className="w-full p-2 rounded"
                type="text"
                id="manpower"
                placeholder="Ex: 100"
                value={manpower}
                onChange={(e) => setManpower(e.target.value)}
                required
              />
            </div>

            {/* Commented out progress field since it's not used in this context */}
            {/* {role !== "supervisor" && (
              <div className="mb-4">
                <label className="block mb-1 text-white" htmlFor="progress">
                  Progress Update for {zoneName}
                </label>
                <textarea
                  className="w-full p-2 rounded"
                  id="progress"
                  placeholder="Enter progress details"
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  required
                ></textarea>
              </div>
            )} */}

            <button
              type="submit"
              className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MineDetails;

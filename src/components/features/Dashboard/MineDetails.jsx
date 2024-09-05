/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import WelcomeNav from "../../WelcomeNav";
const MineDetails = () => {
  const [zoneName, setZoneName] = useState("");
  const [shift, setShift] = useState("morningshift");
  const [zone, setZone] = useState("ZoneA");
  const [area, setArea] = useState("");
  const [manpower, setManpower] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process form data here or send it to a server
    console.log({ zoneName, shift, zone, area, manpower });
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

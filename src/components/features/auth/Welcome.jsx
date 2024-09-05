/* eslint-disable react/no-unescaped-entities */
import { useLocation } from "react-router-dom";
import WelcomeNav from "../../WelcomeNav";

function Welcome() {
  const location = useLocation();
  const { name } = location.state || {};

  return (
    <div>
      <WelcomeNav />
      <div className="text-xl md:text-3xl text-center">Hello {name},</div>
      <div className="text-xl md:text-3xl text-center mt-4">
        Welcome to the Coal Mining Shift Management System!
      </div>
      <div className="text-lg md:text-2xl text-center mt-2 text-gray-600">
        Keep track of your shift logs, monitor progress, and ensure a smooth
        handover for the next shift.
      </div>
      <div className="text-lg md:text-2xl text-center mt-2 text-gray-600">
        You're logged in for the current shift. Please review the mine's
        progress and update your log.
      </div>
    </div>
  );
}

export default Welcome;

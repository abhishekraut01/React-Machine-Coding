import type { ChangeEvent } from "react";
import type { PageProps } from "./Navbar";

const Settings: React.FC<PageProps> = ({ data, setData }) => {

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setData((prev) => ({
      ...prev,
      Theme: value
    }));
  };

  const handleSubmit = () => {
    console.log("Final Form Data:", data);
    // You can also add validation or API calls here
    alert("Data submitted! Check console 🎉");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-orange-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Settings
        </h2>

        <div className="space-y-4">
          <p className="text-gray-600 font-medium">Theme</p>

          {/* Dark Mode Option */}
          <label
            htmlFor="Dark"
            className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition"
          >
            <input
              type="radio"
              id="Dark"
              name="Theme"
              value="Dark"
              checked={data.Theme === "Dark"}
              onChange={handleThemeChange}
              className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-400"
            />
            <span className="text-lg text-gray-700">Dark</span>
          </label>

          {/* Light Mode Option */}
          <label
            htmlFor="Light"
            className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition"
          >
            <input
              type="radio"
              id="Light"
              name="Theme"
              value="Light"
              checked={data.Theme === "Light"}
              onChange={handleThemeChange}
              className="h-5 w-5 text-blue-500 focus:ring-2 focus:ring-blue-400"
            />
            <span className="text-lg text-gray-700">Light</span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Submit All Data
        </button>
      </div>
    </div>
  );
};

export default Settings;

const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-green-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Profile Information
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* College */}
          <div>
            <label
              htmlFor="college"
              className="block text-gray-700 font-medium mb-1"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              name="college"
              placeholder="Enter College"
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Designation */}
          <div>
            <label
              htmlFor="designation"
              className="block text-gray-700 font-medium mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              placeholder="Enter Designation"
              className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

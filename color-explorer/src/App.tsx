import { IoSearchOutline } from "react-icons/io5";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="h-[500px] w-[400px] flex flex-col justify-center items-center bg-[#F0F0F0] gap-10 p-6  rounded-lg">
        <h1 className="text-4xl text-green-900 font-bold" >color explorer</h1>

        <div className="flex   gap-3">
          <input className="border-1 py-2 px-12 rounded-md bg-white font-semibold" type="text" placeholder="Type color name ex. Red" />
          <div className="bg-white py-3 px-4 rounded-md flex justify-center items-center ">
            <IoSearchOutline className="text-xl" />
          </div>
        </div>

        <div className="h-[100%] w-[100%] flex shadow-2xl flex-col justify-center items-center gap-3 bg-white  rounded-md hover:scale-101 transition-all  ">
          <div className="h-[150px] w-[150px] shadow-sm  rounded-full border-4 border-[#F0F0F0]">

          </div >
          <div className="font-bold text-xl">
            <h2 >Name :</h2>
            <h3>Hex : </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

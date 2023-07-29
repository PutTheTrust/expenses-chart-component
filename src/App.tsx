import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="bg-custom-orange mx-4 flex justify-center items-center h-screen">
      <div className="flex justify-between items-center bg-red w-full rounded-xl h-[97px] px-[21px]">
        <div className=" text-white">
          <p className="text-sm">My balance</p>
          <p className="font-semibold text-xl">$921.48</p>
        </div>

        <img src={logo} alt="logo" width={64} />
      </div>
    </div>
  );
}

export default App;

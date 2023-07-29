import data from "./assets/data/data.json";

import logo from "./assets/logo.svg";
import Tooltip from "./components/tooltip";

const App = () => {
  console.log(data);
  return (
    <div className=" mx-4 flex flex-col justify-center md:mx-auto h-screen max-w-[540px]">
      <div className="flex justify-between items-center bg-red w-full  rounded-xl h-[97px] px-[21px]">
        <div className=" text-white">
          <p className="text-sm">My balance</p>
          <p className="font-semibold text-xl">$921.48</p>
        </div>

        <img src={logo} alt="logo" width={64} />
      </div>

      <div className="w-full mt-6 bg-white p-[42px] px-[21px] rounded-xl">
        <h1 className="font-bold text-2xl">Spending - Last 7 days</h1>

        <div className="h-[250px] mt-4 flex items-end justify-between">
          {/* {data} */}
          {data.map((day, idx) => (
            <Tooltip
              key={day.day}
              text={day.day}
              percentage={day.amount}
              idx={idx}
            />
          ))}
        </div>

        <div className="h-[2px] w-full bg-cream mt-4" />

        <div className="mt-4 flex justify-between items-end ">
          <div>
            <p className="text-base text-medium-brown">Total this month</p>
            <p className="font-bold text-3xl">$478.33</p>
          </div>

          <div>
            <p className="text-right text-base font-bold">+2.4%</p>
            <p className="text-base text-medium-brown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

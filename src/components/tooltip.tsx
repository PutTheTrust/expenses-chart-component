interface TooltipProps {
  percentage: number;
  idx: number;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ percentage, idx, text }) => {
  const date = new Date();
  console.log(date.getDay());
  return (
    <div className="flex flex-col justify-end  h-full">
      <div
        className={`${
          idx === date.getDay() ? "bg-cyan" : "bg-red"
        }  w-[33px] md:w-[51px] tooltip rounded-md hover:bg-[#ff9b86]`}
        style={{ height: `${percentage}%` }}
      >
        <span className="tooltiptext">${percentage}</span>
      </div>
      <p className="text-sm text-center text-medium-brown">{text}</p>
    </div>
  );
};

export default Tooltip;

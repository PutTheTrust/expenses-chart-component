interface TooltipProps {
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return <span className="tooltiptext">{text}</span>;
};

export default Tooltip;

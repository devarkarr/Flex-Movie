import classes from "./styles/moviecard.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import clsx from "clsx";

interface VoteAverageCircleType { rate: number,className?:string }

const VoteAverageCircle = ({ rate,className }: VoteAverageCircleType) => {
  return (
    <CircularProgressbar
      className={clsx(classes.score,className)}
      styles={{
        path: {
          stroke: rate < 5 ? "red" : rate < 7 ? "#CFD230" : "#20C675",
          strokeLinecap: "round",
        },
        text: {
          fontSize: 30,
          fontWeight:700
        },
        trail: {
          stroke: "#335159",
        },
        background: {
          background: "#081c22",
        },
      }}
      value={rate}
      text={`${rate}%`}
    />
  );
};

export default VoteAverageCircle;

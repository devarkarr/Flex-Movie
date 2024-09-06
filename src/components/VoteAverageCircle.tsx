import classes from "./styles/moviecard.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const VoteAverageCircle = ({ rate }: { rate: number }) => {
  return (
    <CircularProgressbar
      className={classes.score}
      styles={{
        path: {
          stroke: rate < 5 ? "red" : rate < 7 ? "orange" : "green",
          strokeLinecap: "round",
        },
        text: {
          fontSize: 27,
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

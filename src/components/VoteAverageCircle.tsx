import {  Flex } from "@mantine/core";
import classes from "./styles/moviecard.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const VoteAverageCircle = ({ rate }: { rate: number }) => {
  return (
    <Flex pos={'absolute'} align={'center'} justify={'center'} bottom={'-1.2em'} left={'0.8em'}>
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
              stroke: '#335159',
            },
            background:{
                background:'#081c22'
            }
          }}
          value={rate}
          text={`${rate}%`}
        />
    </Flex>
  );
};

export default VoteAverageCircle;

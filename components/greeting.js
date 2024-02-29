import React from "react";
import { Text } from "react-native";
import styles from "../styles";

const Greetings = () => {
  let myDate = new Date();
  let hours = myDate.getHours();
  let greet;

  if (hours < 12) greet = "morning";
  else if (hours >= 12 && hours <= 17) greet = "afternoon";
  else if (hours >= 17 && hours <= 24) greet = "evening";

  return <Text style={styles.greetStyle}>Good {greet},</Text>;
};

export default Greetings;

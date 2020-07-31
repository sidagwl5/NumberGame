const Condition = (numVal, ran) => {
  if (ran - numVal === 0) {
    return { color: "green", type: "Correct!!" };
  } else if (ran - numVal >= 1 && ran - numVal <= 4) {
    return { color: "red", type: "Hot!!" };
  } else if (ran - numVal >= 5 && ran - numVal <= 15) {
    return { color: "yellow", type: "Warm!!" };
  } else {
    return { color: "blue", type: "Cold!!" };
  }
};

export default Condition;

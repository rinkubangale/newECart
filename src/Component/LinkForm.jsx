import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

const divStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  height: "30vh",
  margin: "auto auto"
};

const initData = {
  link: "",
  time: ""
};

export default function LinkForm() {
  const [data, setData] = useState(initData);
  // const [click, setClick] = useState(false);

  const handleSubmit = (data) => {
    let time = new Date();
    let setTime;
    let realTime = time.toLocaleTimeString().split(":").join(" ").split(" ");
    if (realTime[3] === "PM") {
      realTime[0] = +realTime[0] - 12;
    }
    let checkTime = realTime.slice(0, 2);
    checkTime[0] = checkTime[0].length === 1 && `${"0" + checkTime[0]}`;
    checkTime = checkTime.join(":");
    let newTime = data.time;
    if (newTime === checkTime) {
      console.log(newTime, checkTime);
      setTime && clearTimeout(setTime);
      window.location.replace(data.link);
    }
    console.log(newTime, checkTime);
    setTime = setTimeout(handleSubmit, 10000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div style={divStyle}>
        <TextField
          id="outlined-basic"
          label="Zoom Link..."
          name="link"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="time"
          variant="outlined"
          type="time"
          name="time"
          onChange={handleChange}
        />
        <Button
          variant="outlined"
          color="success"
          onClick={() => handleSubmit(data)}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

import {
  Typography,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

const Test = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0,
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMITTED INPUTS: ", inputs);
  };

  return (
    <div>
      {/* typography */}
      <Typography
        color={"teal"}
        border="1px solid black"
        padding={"2rem"}
        fontStyle={"italic"}
        variant="h1"
        margin={"2px"}
      >
        Hello World!
      </Typography>

      {/* textfield */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          name="name"
          onChange={(e) =>
            setInputs((prevState) => {
              return {
                ...prevState,
                [e.target.name]: e.target.value,
              };
            })
          }
          sx={{ margin: 3 }}
          type="text"
          placeholder="Enter Name"
          variant="outlined"
        />
        <TextField
          name="email"
          onChange={(e) =>
            setInputs((prevState) => {
              return {
                ...prevState,
                [e.target.name]: e.target.value,
              };
            })
          }
          value={inputs.email}
          sx={{ margin: 3 }}
          type="email"
          placeholder="Enter Email"
          variant="standard"
        />
        <TextField
          name="password"
          onChange={(e) =>
            setInputs((prevState) => {
              return {
                ...prevState,
                [e.target.name]: e.target.value,
              };
            })
          }
          value={inputs.password}
          sx={{ margin: 3 }}
          type="password"
          placeholder="Enter Password"
          variant="filled"
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="subscribe"
                onChange={(e) => {
                  setInputs((prevState) => {
                    return {
                      ...prevState,
                      [e.target.name]: !inputs.subscribe,
                    };
                  });
                }}
              />
            }
            label="Subscribe to news letter"
          />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={(e) =>
              setInputs((prevState) => {
                return {
                  ...prevState,
                  [e.target.name]: e.target.value,
                };
              })
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" defaultValue="female">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
      <Typography margin={"1rem"} variant="h5">
        Email: {inputs.email}
      </Typography>
      <Typography margin={"1rem"} variant="h5">
        Password: {inputs.password}
      </Typography>

      <Button
        onClick={() => alert("Button click ")}
        color="primary"
        sx={{ margin: 3 }}
        size="large"
        variant="contained"
      >
        First
      </Button>
      <Button
        onClick={() => alert("Button click ")}
        color="secondary"
        sx={{ margin: 3 }}
        variant="outlined"
        size="medium"
      >
        Second
      </Button>
      <Button
        onClick={() => alert("Button click ")}
        color="info"
        sx={{ margin: 3 }}
        size="small"
        variant="text"
      >
        Third
      </Button>
    </div>
  );
};

export default Test;

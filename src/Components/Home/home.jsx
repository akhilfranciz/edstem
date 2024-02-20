import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { courseName } from "../Redux/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const history = useNavigate();
  const [type, setType] = React.useState("");
  const courselist = [
    {
      course: "React",
      type: "1",
    },
    {
      course: "Java",
      type: "1",
    },
    {
      course: "Python",
      type: "2",
    },
    {
      course: "Angular",
      type: "3",
    },
    {
      course: ".Net",
      type: "4",
    },
    {
      course: "Mechanical",
      type: "5",
    },
    {
      course: "Automobile",
      type: "4",
    },
  ];
  const handleChange = (e) => {
    let c = courselist.filter((y) => y.type === e.target.value);
    if (c.length === 0) {
      setCourse([...courselist]);
    } else {
      setCourse([...c]);
    }

    setType(e.target.value);
  };

  const [courses, setCourse] = useState(courselist);

  const handleCourse = (x) => {
    props.courseName(x);
    history("/details");
  };
  return (
    <div>
      <div className="mainContainer">
        <div className="filteroptions" style={{ padding: 20 }}>
          <div style={{ width: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Type"
                onChange={handleChange}
              >
                <MenuItem value={"1"}>1</MenuItem>
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"3"}>3</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
                <MenuItem value={"5"}>5</MenuItem>
                <MenuItem value={"all"}>All</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="course">
          <h3>Course List</h3>
          <ul>
            {courses.map((x) => (
              <li onClick={() => handleCourse(x.course)}>{x.course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // map state to props
    course: state.counterData.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // map actions to props
    courseName: (data) => {
      dispatch(courseName(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

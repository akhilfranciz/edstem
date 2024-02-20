import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courseName } from "../Redux/action";
import { connect } from "react-redux";

const CourseDetail = (props) => {
  const [courseName, setCourseName] = useState("");
  useEffect(() => {
    setCourseName(props.course);
  }, [props.course]);
  return (
    <div>
      <div>
        <h3>{courseName}</h3>
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // map state to props
    course: state.counterData.course,
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);

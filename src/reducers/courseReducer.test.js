import expect from 'expect';
import * as courseActions from '../actions/courseActions';
import courseReducer from './courseReducer';

describe("Course Reducer", () => {
  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    //arrange
    const initialState = [{title: "A"}, {title: "B"}];
    const newCourse = {title: "C"};
    const action = courseActions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual("A");
    expect(newState[1].title).toEqual("B");
    expect(newState[2].title).toEqual("C");
  });

  it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
    //arrange
    const initialState = [
      {title: "A", id: "A"},
      {title: "B", id: "B"},
      {title: "C", id: "C"}
    ];
    const course = {title: "new title", id: 'B'};
    const action = courseActions.updateCourseSuccess(course);

    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(newStateCourse => newStateCourse.id === course.id);
    const untouchedCourse = newState.find(newStateCourse => newStateCourse.id == "A");

    //assert
    expect(updatedCourse.title).toEqual("new title");
    expect(untouchedCourse.title).toEqual("A");
    expect(newState.length).toEqual(3);
  });
});

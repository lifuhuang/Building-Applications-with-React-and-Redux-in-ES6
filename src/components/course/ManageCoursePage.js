import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) { //what is context used for?
    super(props, context);
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave() {
    alert("saved");
  }

  handleChange() {
    alert("changed");
  }

  render() {
    return(
      <CourseForm
        allAuthors={[]}
        course={this.state.course}
        errors={this.state.errors}
        onSave={this.handleSave}
        onChange={this.handleChange}/>
    );
  }
}

ManageCoursePage.propTypes = { //Question: shouldn't this be ".propTypes"?
  course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

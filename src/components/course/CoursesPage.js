/**
 * Created by agomez on 14/09/16.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ""}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Courses"
                        subtitle="Add Course"
                    />
                    <CardText>
                        <h2>Courses</h2>
                        {this.props.courses.map(this.courseRow)}
                        <TextField
                            hintText={this.state.course.title}
                            floatingLabelText="Course"
                            onChange={this.onTitleChange}
                            value={this.state.course.title}/>
                    </CardText>
                    <CardActions>
                        <FlatButton
                            label="Save"
                            onTouchTap={this.onClickSave}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

CoursesPage.propTypes = {
    actions: React.PropTypes.object.isRequired,
    courses: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
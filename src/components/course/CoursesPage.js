/**
 * Created by agomez on 14/09/16.
 */
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    redirectToAddCoursePage() {
        browserHistory.push('course');
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <Card>
                    <CardHeader title="Courses" />
                    <CardText>
                        <RaisedButton label="Add Course" primary={true} onClick={this.redirectToAddCoursePage} />
                        <CourseList courses={courses}/>
                    </CardText>
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
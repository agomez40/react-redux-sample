/**
 * Created by agomez on 14/09/16.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
        this.setState({ course: course });
    }

    onClickSave(){
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Courses"
                        subtitle="Add Course"
                    />
                    <CardText
                        children={
                            <TextField
                                hintText={this.state.course.title}
                                floatingLabelText="Course"
                                onChange={this.onTitleChange}
                                value={this.state.course.title}/>
                        }
                    >
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

export default CoursesPage;
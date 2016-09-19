/**
 * Created by Beto on 17/09/2016.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h3>Manage Course</h3>
            <TextField
                id="title"
                name="title"
                hintText="Title"
                floatingLabelText="Title"
                value={course.title}
                onChange={onChange}
                errorText={errors.title}
            />
            <br />
            <SelectField
                id="authorId"
                name="authorId"
                floatingLabelText="Author"
                value={course.authorId}
                onChange={onChange}
                errorText={errors.title}>
                <MenuItem value={1} primaryText="Default option"/>
                {allAuthors.map((option) => {
                    return <MenuItem key={option.value} value={option.value} primaryText={option.text}/>;
                })}
            </SelectField>
            <br />
            <TextField
                id="category"
                name="category"
                hintText="Category"
                floatingLabelText="Category"
                value={course.category}
                onChange={onChange}
                errorText={errors.category}
            />
            <br />
            <TextField
                id="length"
                name="length"
                hintText="Length"
                floatingLabelText="Length"
                value={course.length}
                onChange={onChange}
                errorText={errors.length}/>
            <br />
            <RaisedButton label="Save"
                          primary={true}
                          onClick={onSave}
            />
        </form>
    );
};

CourseForm.propTypes = {
    course: React.PropTypes.object.isRequired,
    allAuthors: React.PropTypes.array,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    errors: React.PropTypes.object
};

export default CourseForm;
/**
 * Created by Beto on 16/09/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {TableRow, TableRowColumn} from 'material-ui/Table';

const CourseListRow = ({course}) => {
    return(
        <TableRow selectable={false}>
            <TableRowColumn><Link to={'/course/' + course.id}>{course.title}</Link></TableRowColumn>
            <TableRowColumn>{course.authorId}</TableRowColumn>
            <TableRowColumn>{course.category}</TableRowColumn>
            <TableRowColumn>{course.length}</TableRowColumn>
        </TableRow>
    );
};

CourseListRow.propTypes = {
    course: React.PropTypes.object.isRequired
};

export default CourseListRow;
/**
 * Created by Beto on 16/09/2016.
 */

import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    return(
        <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Author</TableHeaderColumn>
                    <TableHeaderColumn>Category</TableHeaderColumn>
                    <TableHeaderColumn>Length</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {courses.map(course =>
                    <CourseListRow key={course.id} course={course} />
                )}
            </TableBody>
        </Table>
    );
};

CourseList.propTypes = {
    courses: React.PropTypes.array.isRequired
};

export default CourseList;
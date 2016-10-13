import React, {PropTypes} from 'react';
import {Link} from 'react-router';

//static dumb component
const AuthorListRow = ({author}, index) => {
    return (
        <tr key={index}>
            <td><Link to={'/author/' + author.id}>{author.firstName}</Link></td>
            <td><Link to={'/author/' + author.id}>{author.lastName}</Link></td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired
};


export default AuthorListRow;

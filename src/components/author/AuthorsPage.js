import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    }

    authorRow(author, index) {
        return <div key={index}>{author.title}</div>;
    }

    redirectToAddAuthorPage() {
        browserHistory.push('/author');
    }

    render() {
        const { authors } = this.props;

        return (
            <div>
                <h1>Authors</h1>
                <input type="submit"
                value="Add Author"
                className="btn btn-primary"
                onClick={this.redirectToAddAuthorPage}/>
                <AuthorList authors={authors}/>
            </div>
        );
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);

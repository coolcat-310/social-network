import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from "../../actions/post";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        const _id = match.params.id;
        getPost(_id);
    }, [getPost, match]);

    return loading || post === null ? (
        <div > loading</div>
    ) : (
        <Fragment>
            <Link to='/posts' className='btn'>
                Back To Posts
            </Link>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <div className='comments'>
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
        </Fragment>
    );
};

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(
    mapStateToProps,
    { getPost }
)(Post);
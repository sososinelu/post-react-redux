import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost } from '../actions';

const PostList = ({ posts, onDelete }) => {
    if(!posts.length) {
        return(
            <div>
                <h2>No Posts</h2>
            </div>
        );
    }
    return (
        <div>
            { posts.map(post => {
                return(
                    <Post post={ post } onDelete={ onDelete } key={ post._id } />
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      posts: state.posts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onDelete: id => {
        dispatch(deletePost(id));
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList);
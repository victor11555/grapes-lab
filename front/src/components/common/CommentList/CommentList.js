import React from 'react';
import CommentCard from '../CommentCard/CommentCard';
import './Comment-list.css'
function CommentList({ id }) {
  return (
    <div className='comment-list'>

      <CommentCard />

    </div>
  );
}

export default CommentList;

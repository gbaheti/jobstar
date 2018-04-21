import React from 'react';

import './styles.css';
import chevronRight from '../../assets/chevron-right.svg';

const PromotionalPost = (props) => {
  return (
    <div className="post card">
      <img className="post__media img-responsive" src={props.media} alt="post-bg"/>
      <div className="post__content">
        <p>{props.text}</p>
        <img src={chevronRight} alt=""/>
      </div>
    </div>
  );
}

export default PromotionalPost;
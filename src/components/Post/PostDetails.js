import classes from './Post.module.scss'
import postImage from '../../assets/images/full.jpg'
import React from 'react'

const PostDetails = ({title, description}) => {
  return (
    <div className={classes.Post}>
      <img src={postImage} alt="Post_1"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default PostDetails

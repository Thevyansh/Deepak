import React from "react";
import {  motion } from "framer-motion";


const PostMiniModal = ({ title, image, category, description }) => {
  return (
    <motion.div className="mini-modal"
      // initial={{ scale: 1, originX: 0.5, originY: 1.5}}
      animate={{ scale: 1.2}}
      // exit={{ originX: 0.5, originY: 1.5}}
      transition={{
        duration: 0.3,
        type: 'tween'
      }}
    >
      <motion.div className="image-container" animate>
        <motion.img
          src={image}
          alt="Post_1"
          className="image"
          layoutId='image-layout'
          animate
        />
      </motion.div>
      <motion.div
        className="text-container"
        layoutId='text-layout'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{
          duration: 0.3,
          ease: [.5,0,.1,1]
        }}
      >
        <motion.h3 className="title">{title}</motion.h3>
        <motion.p className="description">{description}</motion.p>
        <motion.span className="category">{category}</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default PostMiniModal;

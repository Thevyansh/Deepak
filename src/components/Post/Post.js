import React from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import PostMiniModal from "./PostMiniModal";

const Post = ({
  title,
  image,
  category,
  description,
  modal,
  showModal,
  hideModal,
}) => {
  return (
    <AnimateSharedLayout type="crossfade">
      
      <motion.li
        animate
        className="post"
        onHoverStart={showModal}
        onHoverEnd={hideModal}
      >
        <motion.div className="image-container" animate>
          <motion.img
            animate
            src={image}
            alt="Post_1"
            className="image"
            layoutId="image-layout"
          />
        </motion.div>
        <motion.div className="text-container" layoutId='text-layout' animate>
          <motion.h3 className="title">{title}</motion.h3>
          <motion.p className="description">{description}</motion.p>
          <motion.span className="category">{category}</motion.span>
        </motion.div>
        <AnimatePresence>
          {modal && (
            <PostMiniModal
              key={title}
              title={title}
              image={image}
              category={category}
              description={description}
            />
          )}
        </AnimatePresence>
      </motion.li>
    </AnimateSharedLayout>
  );
};

export default Post;

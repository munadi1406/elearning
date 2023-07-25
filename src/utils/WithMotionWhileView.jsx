import { motion } from "framer-motion";
import PropTypes from "prop-types";

const WithMotionWhileView = ( OriginalComponent ) => {
  const WrappedComponent = (props) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full"
        transition={{ease:"easeInOut",duration:0.3}}
      >
        <OriginalComponent {...props} />
      </motion.div>
    );
  };

  return WrappedComponent;
};

WithMotionWhileView.propTypes = {
  OriginalComponent: PropTypes.elementType.isRequired,
};

export default WithMotionWhileView;

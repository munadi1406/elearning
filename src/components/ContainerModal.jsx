import PropTypes from 'prop-types'

export default function ContainerModal({children}) {
  return (
      <div
        className="bg-blue1/90 p-2 rounded-md flex justify-center 
        items-center relative md:w-max w-screen h-max flex-col "
      >
        <div className="md:min-w-[500px] w-full h-full  rounded-md gap-2 bg-white flex justify-center  items-center flex-col p-2">
          {children}
        </div>
      </div>
  );
}

ContainerModal.propTypes = {
    children:PropTypes.node.isRequired
}
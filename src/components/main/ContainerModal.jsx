import PropTypes from 'prop-types'

export default function ContainerModal({children}) {
  return (
    <div>
      <div
        className="bg-blue1/90 p-2 rounded-md flex justify-center 
        items-center relative w-96 h-max flex-col "
      >
        <div className="w-full h-full rounded-md gap-2 bg-white flex justify-evenly items-center flex-col p-2">
          {children}
        </div>
      </div>
    </div>
  );
}

ContainerModal.propTypes = {
    children:PropTypes.node.isRequired
}

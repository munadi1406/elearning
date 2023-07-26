const WithContainerModal = (OriginalComponent) => {
  const WrapperComponent = (props) => {
    return (
      <div className="h-full w-full z-30 flex justify-center items-center fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <OriginalComponent {...props} />
      </div>
    );
  };
  return WrapperComponent;
};

export default WithContainerModal;

/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../utils/WithContainerModal";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import ContainerModal from "./ContainerModal";
import PropTypes from 'prop-types'

const JoinCourse = ({handleShowJoinCouseModal}) => {
    
    return (
        <ContainerModal>
        
            <div className="text-2xl font-sans text-blue1 font-semibold">
                Join Course
            </div>
            <form className="w-full gap-2 flex justify-center items-center flex-col  h-2/3">

                <input
                    type="text"
                    name=""
                    id="Academy"
                    className="border-blue1 border outline-none w-full p-2 rounded-md text-sm"
                    placeholder="Kode Kelas..."
                />
                <div className="w-full grid grid-rows-2 gap-2">
                    <ScaleEffectMotion>
                        <input
                            type="submit"
                            value={"Join Course"}
                            className="bg-blue1 rounded-md p-2 cursor-pointer text-white font-sans font-semibold w-full"
                        />
                    </ScaleEffectMotion>
                    <ScaleEffectMotion>
                        <input
                            type="reset"
                            className="bg-cream1 rounded-md p-2 cursor-pointer text-white font-sans font-semibold w-full"
                            value={"Close"}
                            onClick={handleShowJoinCouseModal}
                        />

                    </ScaleEffectMotion>
                </div>
            </form>
        </ContainerModal>
    );
};
JoinCourse.propTypes={
    handleShowJoinCouseModal:PropTypes.func.isRequired
}
export default WithContainerModal(JoinCourse);

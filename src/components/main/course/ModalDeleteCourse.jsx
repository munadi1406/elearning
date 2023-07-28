/* eslint-disable react-refresh/only-export-components */
import { useState } from "react"
import WithContainerModal from "../../../utils/WithContainerModal"
import ContainerModal from "../ContainerModal"
import { useEffect } from "react"
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion"
import PropTypes from 'prop-types'



const ModalDeleteCourse = ({ course, handleIsDelete }) => {

    const [deleteText, setDeleteText] = useState('')
    const [isDelete, setIsDelete] = useState(false);
    const deleteValidation = `delete/${course}`

    const handleDelete = () => {
        if (deleteText === deleteValidation) {
            handleIsDelete()
        }
    }

    const handleDeleteText = (e) => {
        setDeleteText(e.target.value)
    }

    useEffect(() => {
        if (deleteText === deleteValidation) return setIsDelete(true)
        return setIsDelete(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteText])

    const style = {
        button: "p-2 rounded-md text-white font-semibold font-sans text-lg"
    }


    return (
        <ContainerModal>
            <div className="w-full flex justify-center items-center flex-col gap-2">
                <div className="flex justify-center items-start flex-col w-full border gap-2">
                    <label htmlFor="delete" className="text-base font-sans text-blue1">Type <span className="font-semibold"> delete/{course}</span></label>
                    <input type="text" id="delete" className="rounded-md w-full p-2  border-blue1 border outline-none text-sm text-blue1" value={deleteText} onChange={handleDeleteText} />
                </div>
                <div className="flex gap-2 w-full">
                    <ScaleEffectMotion>
                        <button className={`${style.button} bg-blue1 ${!isDelete && 'opacity-60 cursor-not-allowed'} `} onClick={handleDelete} disabled={!isDelete}>Delete This Course</button>
                    </ScaleEffectMotion>
                    <ScaleEffectMotion>
                        <button className={`${style.button} bg-cream1`} onClick={handleIsDelete}>Cancel</button>
                    </ScaleEffectMotion>
                </div>
            </div>
        </ContainerModal>
    )
}
ModalDeleteCourse.propTypes ={
    course:PropTypes.string.isRequired,
    handleIsDelete:PropTypes.func.isRequired
}
export default WithContainerModal(ModalDeleteCourse)
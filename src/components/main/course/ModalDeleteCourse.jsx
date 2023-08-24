/* eslint-disable react-refresh/only-export-components */
import { useState } from "react"
import WithContainerModal from "../../../utils/WithContainerModal"
import ContainerModal from "../../ContainerModal"
import { useEffect } from "react"
import PropTypes from 'prop-types'
import ButtonPure from "../../ButtonPure"
import { useNotification } from "../../../store/strore"
import { useMutation } from "react-query"
import { deleteCourse } from "../../../api/course"



const ModalDeleteCourse = ({ course, idCourse, handleIsDelete }) => {

    const [deleteText, setDeleteText] = useState('')
    const [isDelete, setIsDelete] = useState(false);
    const deleteValidation = `delete/${course}`
    const { setStatus, setStatusType, setMsgNotification } = useNotification((state) => state)



    const handleDeleteText = (e) => {
        setDeleteText(e.target.value)
    }

    useEffect(() => {
        if (deleteText === deleteValidation) return setIsDelete(true)
        return setIsDelete(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteText])

    const { mutate } = useMutation({
        mutationFn: async () => {
            return await deleteCourse(idCourse)
        },
        onSuccess: (data) => {
            setStatus(true)
            setStatusType(true)
            setMsgNotification(data.data.message)
            handleIsDelete()
        },
        onError: (error) => {
            setStatus(true)
            setStatusType(false)
            setMsgNotification(error.response.data.message)
        }
    })

    const handleDelete = () => {
        if (deleteText === deleteValidation) {

            mutate()
        }
    }

    return (
        <ContainerModal>
            <div className="flex md:w-[500px] w-[85vw] justify-center items-center flex-col gap-2">
                <div className="text-blue1 font-sans font-semibold text-lg w-full text-center">Apakah Anda Yakin Ingin Menghapus Course {course}</div>
                <div className="text-blue1 font-sans text-sm w-full text-center">Semua Data Yang Berhubungan Dengan {course} Akan Di Hapus</div>
                <div className="flex justify-center items-center flex-col w-full gap-2 text-center">
                    <label htmlFor="delete" className="text-sm font-sans text-blue1 ">Jika Anda Yakin Ingin Menghapus <span className="italic font-semibold">{course}</span> Ketik <span className="font-semibold italic"> delete/{course}</span></label>
                    <input type="text" id="delete" className="rounded-md w-full p-2  border-blue1 border outline-none text-sm text-blue1" value={deleteText} onChange={handleDeleteText} />
                </div>
                <div className="flex gap-2 w-full justify-center items-center">
                    <ButtonPure text={"Delete"} color={"red-500"} style={`${!isDelete && 'opacity-60 cursor-not-allowed'}`} onClick={handleDelete} disabled={!isDelete} />
                    <ButtonPure text={"Cancel"} onClick={handleIsDelete} />
                </div>
            </div>
        </ContainerModal>
    )
}
ModalDeleteCourse.propTypes = {
    course: PropTypes.string.isRequired,
    idCourse:PropTypes.number.isRequired,
    handleIsDelete: PropTypes.func.isRequired
}
export default WithContainerModal(ModalDeleteCourse)
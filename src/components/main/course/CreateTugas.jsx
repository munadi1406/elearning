/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../utils/WithContainerModal";
import ContainerModal from "../../../components/main/ContainerModal";
import PropTypes from 'prop-types'

const CreateTugas = ({ handleClose }) => {

    const style = {
        input: "w-full outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
        label: "text-sm font-semibold text-blue1 "

    }

    return (
        <ContainerModal>
            <div className="bg-white  rounded-md  md:w-[700px] w-full grid grid-cols-1 gap-2">
                <div className="text-2xl font-sans font-semibold text-blue1 w-full text-center">Buat Tugas</div>
                <form action="" className="flex justify-center items-center flex-col w-full gap-5">
                    <div className="w-full">
                        <label htmlFor="namaTugas" className={`${style.label}`}>Nama Tugas</label>
                        <input type="text" id="namaTugas" className={`${style.input}`} placeholder="Nama Tugas..." />
                    </div>
                    <div className="w-full">
                        <label htmlFor="desc" className={`${style.label}`}>Desc</label>
                        <textarea id="desc" cols="30" rows="5" className={`${style.input}`} placeholder="Desc..."></textarea>
                    </div>
                    <div className="w-full flex justify-center items-start flex-col gap-2">
                        <label htmlFor="descFile" className={`${style.label}`}>File pdf/doc/docx (option)</label>
                        <input type="file" id="descFile" className="border border-blue1 w-full p-2 rounded-md" accept="pdf/doc/docx"/>
                    </div>
                    <div className={`${style.input} w-full grid grid-cols-2`}>
                        <div className="flex justify-start gap-2 items-center ">
                            <label htmlFor="from-date" className={`${style.label}`}>From:</label>
                            <input type="datetime-local" id="from-date" />
                        </div>
                        <div className="flex justify-start gap-2 items-center ">
                            <label htmlFor="to-date" className={`${style.label}`}>To:</label>
                            <input type="datetime-local" id="to-date" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="accept" className={`${style.label}`}>Accept</label>
                        <select id="accept" className={`${style.input} `}>
                            <option value="doc/docx">
                                doc/docx
                            </option>
                            <option value="ppt">
                                ppt
                            </option>
                            <option value="pdf">
                                pdf
                            </option>
                            <option value="any">
                                any
                            </option>
                        </select>
                    </div>
                    <button className="bg-blue1 w-full p-2 rounded-md text-white font-sans font-semibold">Create</button>
                </form>
                <button onClick={() => handleClose()} className="bg-cream1 w-full p-2 rounded-md text-white font-sans font-semibold">Close</button>
            </div>
        </ContainerModal>
    );
};

CreateTugas.propTypes = {
    handleClose: PropTypes.func.isRequired
}

export default WithContainerModal(CreateTugas);

/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from '../../../utils/WithContainerModal'
import ContainerModal from '../../ContainerModal'
import PropTypes from 'prop-types'
import ButtonPure from '../../ButtonPure'
import { FaLocationArrow, FaQrcode, FaCode } from 'react-icons/fa'
import { useState } from 'react'
import GpsCheckIn from './check-in/GpsCheckIn'
import QrCodeCheckin from './check-in/QrCodeCheckin'
import TokenCheckin from './check-in/TokenCheckin'

const ModalAttedance = ({ handleClose }) => {
    const style = {
        submenu: "cursor-pointer w-full h-full p-2 text-white text-sm justify-center items-center gap-2 font-semibold font-sans flex "
    }
    const [subMenuActive, setSubMenuActive] = useState(0)
    // 0 === gps
    // 1 === qr code
    // 2 === token
    return (
        <ContainerModal>
            <div className='w-full md:w-[700px] flex justify-center items-center flex-col gap-2'>
                <div className='font-sans text-lg font-semibold text-blue1 text-center'>Attedance Check-in</div>
                <div className=' grid grid-cols-3 gap-2  w-full border'>
                    <div className={`${style.submenu} ${subMenuActive === 0 ? 'bg-cream1' : 'bg-blue1'}`} onClick={() => setSubMenuActive(0)}>
                        <FaLocationArrow />
                        <div>GPS</div>
                    </div>
                    <div className={`${style.submenu} ${subMenuActive === 1 ? 'bg-cream1' : 'bg-blue1'}`} onClick={() => setSubMenuActive(1)}>
                        <FaQrcode />
                        <div>QR Code</div>
                    </div>
                    <div className={`${style.submenu} ${subMenuActive === 2 ? 'bg-cream1' : 'bg-blue1'}`} onClick={() => setSubMenuActive(2)}>
                        <FaCode />
                        <div>Token</div>
                    </div>
                </div>
               
                <div className='max-h-[70vh] overflow-scroll w-full grid grid-cols-1'>
                    {subMenuActive === 0 && <GpsCheckIn />}
                    {subMenuActive === 1 && <QrCodeCheckin />}
                    {subMenuActive === 2 && <TokenCheckin />}
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <ButtonPure text={"Check-in"} color={"blue1"} onClick={handleClose} />
                    <ButtonPure text={"close"} color={"cream1"} onClick={handleClose} />
                </div>
            </div>
        </ContainerModal>
    )
}
ModalAttedance.propTypes = {
    handleClose: PropTypes.func.isRequired
}
export default WithContainerModal(ModalAttedance)
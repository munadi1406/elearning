
import ButtonPure from '../../../ButtonPure'

export default function OthersCheckin() {
    const style ={
        radio:"grid grid-cols-2 gap-2  p-2 text-blue1 font-sans font-semibold rounded-md"
    }
    return (
        <div className='flex justify-center items-center flex-col w-full'>
            <div className='w-1/3 flex justify-between items-center gap-2'>
                <div className={style.radio}>
                    <label htmlFor="izin">Izin</label>
                    <input type="radio" value={"Izin"} id='izin' name='others' className='bg-blue1 p-2'/>
                </div>
                <div className={style.radio}>
                    <label htmlFor="sakit">Sakit</label>
                    <input type="radio" value={"Sakit"} id='sakit' name='others' />
                </div>
            </div>
            <div className='flex'>
                <ButtonPure text={"Check-in"} />
            </div>
        </div>
    )
}

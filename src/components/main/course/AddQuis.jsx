
import { useEffect } from "react";
import { useState } from "react"

export default function AddQuis() {
    const style = {
        input: "w-full outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
        jawaban: "w-full outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
        label: "text-sm font-semibold text-blue1"
    }

    const [inputValues, setInputValues] = useState([]); // State untuk menyimpan nilai input
    const [jumlahSoal, setJumlahSoal] = useState(0);
    const [jumlahOpsiJawaban, setJumlahOpsiJawaban] = useState(0);


    const handleCreate = () => {
        const soalElements = [];
        for (let index = 0; index < jumlahSoal; index++) {
            const handleSoalInputChange = (event) => {
                const { name, value } = event.target;
                const inputIndex = parseInt(name.split('-')[1]); // Ambil indeks dari nama input
                const updatedValues = [...inputValues]; // Salin nilai inputValues ke array baru
                updatedValues[inputIndex] = value; // Update nilai input sesuai dengan indeksnya
                setInputValues(updatedValues); // Update state inputValues
            };

            const soalInput = (
                <textarea
                    id={`soal${index}`}
                    placeholder={`Tuliskan Soal Disini Dan Click Jawaban Yang Benar `}
                    className={style.input}
                    name={`soal-${index}`}
                    key={`soal-${index}`}
                    onChange={handleSoalInputChange} // Tambahkan event handler onChange
                />
            );
            const labelSoal = (
                <label id={`labelSoal${index}`} key={`labelSoal${index}`} className={style.label}>{`Soal ${index + 1}`}</label>
            );

            const jawabanElements = [];
            for (let i = 0; i < jumlahOpsiJawaban; i++) {
                const jawabanInput = (
                    <textarea
                        key={`jawaban${i}`}
                        className={style.jawaban}
                    />
                );

                const radioInput = (
                    <input
                        key={`radio${i}`}
                        type="radio"
                        name={`soal-${index}`}
                    />
                );

                const labelJawaban = (
                    <label key={`label${i}`} className={style.label}>{`Jawaban ${i + 1}`}</label>
                );

                jawabanElements.push(
                    <div key={`wrapper-${i}`}>
                        {radioInput}
                        {labelJawaban}
                        {jawabanInput}
                    </div>
                );
            }

            const soalDiv = (
                <div key={index}>
                    {labelSoal}
                    {soalInput}
                    {jawabanElements}
                </div>
            );

            soalElements.push(soalDiv);
        }

        return soalElements;
    };

    useEffect(() => {
        console.log(inputValues);
    }, [inputValues])
    return (
        <div className="grid grid-cols-1 gap-2">
            <div className="flex justify-center items-center flex-col w-full gap-5">
                <div className="flex justify-center items-center gap-2 w-full flex-col">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="w-full">
                            <label htmlFor="namaTugas" className={`${style.label}`}>Jumlah Soal</label>
                            <input type="number" id="namaTugas" className={`${style.input}`} placeholder="Jumlah Soal..." value={jumlahSoal} onChange={(e) => setJumlahSoal(e.target.value)} />
                        </div>
                        <div className="w-full">
                            <label htmlFor="namaTugas" className={`${style.label}`}>Jumlah Opsi Jawaban</label>
                            <input type="number" id="namaTugas" className={`${style.input}`} placeholder="Jumlah Opsi Jawaban" value={jumlahOpsiJawaban} onChange={(e) => setJumlahOpsiJawaban(e.target.value)} />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
                {handleCreate()}
            </div>
            <button className="bg-blue1 w-full p-2 rounded-md text-white font-sans font-semibold" >Post Quis</button>
        </div>
    )
}

import Comments from './Comments';
import { useState } from 'react';

export default function Tugas() {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
  
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    };
  
    const handleDragEnter = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      const selectedFile = e.dataTransfer.files[0];
      setFile(selectedFile);
    };

  return (
    <>
      <div className="flex col-span-2 justify-center h-max items-start flex-col w-full gap-2">
                <div className="flex gap-2 text-blue1 font-semibold text-lg font-sans">
                  <div>Tugas 1</div>
                  <div>-</div>
                  <div>Jamal</div>
                </div>
                <div>
                  <div className="text-sm font-sans text-blue1">Date : 18:00 29-07-2023 - 18:00 30-29-2023</div>
                  <div className="text-sm font-sans text-blue1">Accept : Pdf</div>
                  <div className="text-sm font-sans text-blue1">buatkalah sebuah website dengan menggunakan javascript untuk membuat animasi bebas</div>
                </div>
                <Comments />
              </div>
              <div className="flex md:col-span-1 col-span-2 px-2 h-full border-blue1 border rounded-md justify-center items-center flex-col">
                <div
                  className={`relative w-full h-40 border-dashed flex justify-center items-center flex-col ${isDragging ? 'border-green-500' : 'border-blue1'
                    } border rounded-md`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    className="border w-full h-40 absolute z-10 opacity-0"
                    onChange={handleFileChange}
                  />
                  <div className="w-full h-40  relative z-0 flex justify-center items-center text-blue1 font-sans text-sm font-semibold">
                    {file ? file.name : 'Drop Here...'}
                  </div>
                </div>
                <button className="bg-blue1 rounded-md text-white p-2 mt-2">Kirim</button>
              </div> 
    </>
  )
}

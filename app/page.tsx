'use client';
import TransitionImage from "./TransitionImage";
import ImageModal from "./ImageModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  return (
    <>
      <ImageModal img={modalImg} show={showModal} setShow={setShowModal} />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 lg:p-24 ">
        <div className=" bg-gray-900 p-5 rounded-lg flex flex-wrap gap-6 max-w-4xl items-center justify-center">
          <div className=" w-full">
            <h1 className=" text-4xl md:text-5xl font-bold text-center">Gif Showcase</h1>
          </div>

          {["eyes", "animation", "cat", "earth", ...[0, 1, 2, 3, 7].map(n => `david${n}`)].map((fileName) => {
            return <div className='bg-gray-700 rounded-lg min-w-[3rem] min-h-[5rem] hover:bg-gray-600 transition cursor-pointer p-3' key={fileName} onClick={() => { setShowModal(true); setModalImg(fileName) }}>
              <TransitionImage moving={false} imageUrl={fileName} />
            </div>;
          })}
        </div>
      </main></>
  )
}

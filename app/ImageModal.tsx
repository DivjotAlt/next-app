import TransitionImage from "./TransitionImage";

export default function ImageModal({ img, show, setShow }: { img: string, show: boolean, setShow: Function }) {
    return <>
        {show ?
            <div className="w-full h-screen fixed bg-black bg-opacity-40 flex items-center justify-center" onClick={() => { setShow(false) }}>
                <div className="bg-gray-700 p-6 rounded-lg"><TransitionImage moving imageUrl={img} /></div>
            </div>
            : <></>}
    </>
}
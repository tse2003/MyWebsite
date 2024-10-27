"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const toggleDialog = (image) => {
    setSelectedImage(image);
    setDialogOpen(!isDialogOpen);
  };

  return (
    <div className="m-auto w-[1000px] h-full">
      <h1 className="text-white text-center font-bold text-4xl pb-5">Хамгийн их үзэлттэй кино</h1>

      <div className="m-auto w-[1000px] h-[400px] bg-gray-200 relative">
        <Image src="/Zone.jpg" layout="fill" objectFit="cover" alt="logo" onClick={()=>document.getElementById('my_modal_4').showModal()}/>
        <dialog id="my_modal_4" className="modal">
        <div className="card glass p-5 rounded shadow-lg">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      </div>

      <h1 className="text-white font-bold text-4xl pt-5">Дэлгэцээр гарч буй кинонууд</h1>
      <div className="carousel rounded-box mt-5">
        {["/Umnud.jpg", "/Zone.jpg", "/Joker.jpg", "/bagman.jpg", "/III.jpg", "/trans.jpg", "/zolios.jpg"].map((src) => (
          <div className="carousel-item" key={src} onClick={() => toggleDialog(src)}>
            <Image src={src} width={400} height={100} alt="logo"/>
          </div>
        ))}
      </div>

      {/* Dialog Component */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="card glass p-5 rounded shadow-lg">
            <h2 className="text-xl mb-4">Зураг</h2>
            <Image src={selectedImage} width={400} height={100} alt="Selected" />
            <h1 className="text-white">TEXT</h1>
            <button onClick={() => setDialogOpen(false)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Хаах
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

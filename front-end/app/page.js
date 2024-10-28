"use client"
import Image from "next/image";

import { useState } from 'react';

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const movie = [
    { id: 'item1', src: 'Umnud.jpg', title: 'Umnud', description: 'A stunning landscape.', type: 'Action', duration: '100 мин', age: '+12' },
    { id: 'item2', src: 'Zone.jpg', title: 'Zone', description: 'Capturing the essence of urban life.', type: 'Action', duration: '100 мин', age: '+12' },
    { id: 'item3', src: 'Joker.jpg', title: 'Joker', description: 'A dramatic piece with a captivating expression.', type: 'Action', duration: '100 мин', age: '+12' },
    { id: 'item4', src: 'bagman.jpg', title: 'Bagman', description: 'A touch of mystery.', type: 'Action', duration: '100 мин', age: '+12' },
  ];

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setDialogOpen(true);
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

      <h1 className="text-white font-bold text-4xl pt-5 pb-3">Дэлгэцээр гарч буй кинонууд</h1>
      <div className="relative">
      <div className="carousel w-full">
        {movie.map((movie) => (
          <div key={movie.id} id={movie.id} className="carousel-item w-full">
            <img
              src={movie.src}
              className="w-full h-80 cursor-pointer"
              onClick={() => handleImageClick(movie)}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {movie.map((movie) => (
          <a key={movie.id} href={`#${movie.id}`} className="btn btn-xs">
            {movie.id.slice(-1)}
          </a>
        ))}
      </div>

      {dialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="card glass p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-semibold">{currentImage.title}</h2>
            <img src={currentImage.src} width={500} height={100} />
            <p className="mt-2">{currentImage.type}</p>
            <p className="mt-2">Нас: {currentImage.age}</p>
            <p className="mt-5">Үргэлжлэх хугацаа: {currentImage.duration}</p>
            <p className="mt-2">{currentImage.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setDialogOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

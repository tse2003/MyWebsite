import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto w-[1000px] h-full">
      <h1 className="text-white text-center font-bold text-4xl pb-5">Хамгийн их үзэлттэй кино</h1>
      <div className="m-auto w-[1000px] h-[400px] bg-gray-200 relative group">
        <Image src="/Zone.jpg" layout="fill" objectFit="cover" alt="logo" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 className="text-white text-lg p-5">
            <h1 className="text-center text-3xl font-bold">Z zone</h1>
            Бөглүү ойн дунд нэгэн нууцлаг цэргийн баззад гэмт хэрэгтнүүд ирнэ. Тэд эхэндээ зүгээр л хатуу дэглэмтэй хөдөлмөрийн лагер гэж бодож байсан болов ч үгүй байв. Хэрэг буруугаар эргэж нууцлаг Зомбины халдвар тархаж эхэллээ. Тэд амьд үлдэж чадах болов уу?
          </h2>
        </div>
      </div>
      <h1 className="text-white font-bold text-4xl pt-5">Дэлгэцээр гарч буй кинонууд</h1>
      <div className="carousel rounded-box mt-5">
        <div className="carousel-item">
          <Image src="/Umnud.jpg" width={400} height={100} alt="logo"/>
        </div>
        <div className="carousel-item">
          <Image src="/Zone.jpg" width={400} height={100} alt="logo"/>
        </div>
        <div className="carousel-item">
          <Image src="/Joker.jpg" width={400} height={100} alt="logo"/>
        </div>
        <div className="carousel-item">
          <Image src="/bagman.jpg" width={400} height={100} alt="logo"/>
        </div>
        <div className="carousel-item">
          <Image src="/III.jpg" width={400} height={100} alt="logo"/>
        </div>
        <div className="carousel-item">
          <Image src="/trans.jpg" width={400} height={100} alt="logo"/>
        </div>
        <div className="carousel-item">
          <Image src="/zolios.jpg" width={400} height={100} alt="logo"/>
        </div>
      </div>
      
    </div>
  );
}

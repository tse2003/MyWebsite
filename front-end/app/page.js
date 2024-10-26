import Image from "next/image";

export default function Home() {
  return (
    <div className="m-auto w-[1000px] h-full">
      <h1 className="text-white text-center font-bold text-4xl pb-5">Хамгийн их үзэлттэй кино</h1>
      <div className="m-auto w-[1000px] h-[400px] bg-gray-200 relative">
        <Image src="/Zone.jpg" layout="fill" objectFit="cover" alt="logo"/>
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

import Image from "next/image";

export default function Page() {
    return (
        <div className="m-auto w-[1000px] h-full">
            <h1 className="text-white font-bold text-4xl text-center pt-5 pb-3">Тун удахгүй дэлгэцээр гарах кино</h1>
            <div className="flex gap-5 pl-7 pb-5">
                <div className="w-[300px] h-[480px]">
                    <Image src="/Love.jpg" width={300} height={50} alt="logo"/>
                    <h1 className="text-center py-2 text-xl font-bold text-white">LOCE IN THE BIG CITY</h1>
                </div>
                <div className="w-[300px] h-[480px]">
                    <Image src="/smile2.jpg" width={300} height={50} alt="logo"/>
                    <h1 className="text-center py-2 text-xl font-bold text-white">SMILE 2</h1>
                </div>
                <div className="w-[300px] h-[480px]">
                    <Image src="/Dance.jpg" width={300} height={50} alt="logo"/>
                    <h1 className="text-center py-2 text-xl font-bold text-white">VENOM: THE LAST DANCE</h1>
                </div>
            </div>
            <div className="flex gap-5 pl-7 pb-28 pt-5">
                <div className="w-[300px] h-[480px]">
                    <Image src="/IMAX.jpg" width={300} height={50} alt="logo"/>
                    <h1 className="text-center py-2 text-xl font-bold text-white">VENOM: THE LAST DANCE IMAX</h1>
                </div>
                <div className="w-[300px] h-[480px]">
                    <Image src="/Here.jpg" width={300} height={50} alt="logo"/>
                    <h1 className="text-center py-2 text-xl font-bold text-white">Here</h1>
                </div>
                <div className="w-[300px] h-[480px]">
                    <Image src="/BigTrip.jpg" width={300} height={50} alt="logo"/>
                    <h1 className="text-center py-2 text-xl font-bold text-white">THE BIG TRIP 3: RACE AROUND THE WORLD</h1>
                </div>
            </div>
        </div>
    );
  }
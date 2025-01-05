import Image from "next/image";

export default function Page() {
    return (
        <div className="m-auto w-full h-full px-4">
            <h1 className="text-white text-center font-bold text-4xl pt-5 pb-5">БОНУС КАРТ</h1>
            <div className="flex flex-wrap gap-5 justify-center">
                <div className="max-w-sm w-full sm:w-80 md:w-96 rounded overflow-hidden shadow-lg card glass p-5">
                    <Image 
                        className="w-full h-auto object-cover" 
                        src="/bonus/loyalty.png" 
                        width={400}  
                        height={300} 
                        alt="Bonus Card Image" 
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Өргөө бонус карт гэж юу вэ? <p>10% бонус</p></div>
                        <p className="text-white text-base">
                            Өргөө бонус карт нь Өргөө кинотеатрын үнэнч /лояалти/ хэрэглэгчиддээ урамшуулах, халамжлах зорилготойгоор Өргөө кинотеатрын зүгээс гаргасан карт юм. Энэхүү картын хэрэглэгч болсон хэн бүхэн Өргөө кинотеатрын тодорхой заагдсан хэсгүүдээс худалдан авалт хийсэн тохиолдолд худалдан авалтын үнийн дүнгийн 10%-ийг өөрийн бонус картандаа цуглуулах боломжтой болох юм. Мөн төрсөн өдрөөрөө нэг кино үнэгүй үзэх эрх дагалдана.
                        </p>
                    </div>
                </div>

                <div className="max-w-sm w-full sm:w-80 md:w-96 rounded overflow-hidden shadow-lg card glass p-5">
                    <Image 
                        className="w-full h-auto object-cover" 
                        src="/bonus/goolingoo.png" 
                        width={400}  
                        height={300} 
                        alt="Bonus Card Image" 
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-white">Гоолингоо бонус карт гэж юу вэ? <p>Эмэгтэйчүүдэд 13%</p></div>
                        <p className="text-white text-base">
                            Гоолингоо бонус карт нь Өргөө кинотеатрын бонус картын адил үйлчлэх бөгөөд энэхүү картын давуу тал нь зөвхөн эмэгтэйчүүдэд зориулагдсан бөгөөд Өргөө кинотеатрын зүгээс Лхагва гариг бүрийг эмэгтэйчүүдийн өдөр болгон зарлаж гоолингоо картын хэрэглэгчид уг өдөр 13% -ийн бонусыг картандаа цуглуулах боломжтой болсон билээ.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-white">
                <h1 className="text-2xl font-bold pt-10">Өргөө кинотеатрын гишүүнчлэл бонус картны давуу тал:</h1>
                <ul className="list-disc list-inside pl-5">
                    <li>Та Өргөө кинотеатрын бонус картын хэрэглэгч болсноор худалдан авалт тутмын 10 хувьтай тэнцэх мөнгөн дүнг өөрийн бонус картандаа цуглуулах бөгөөд Өргөө кинотеатрын тодорхой байрлалуудад мөнгөн дүнгээр бодон үйлчилгээ авах боломжтой билээ.</li>
                    <li>Өргөө кинотеатрын бонус картын хэрэглэгчиддээ зориулан гаргасан хямдрал урамшуулалд хамрагдах боломжтой</li>
                </ul>
                <h1 className="text-2xl font-bold pt-10">Бонус картны хүчин төгөлдөр үйлчлэх салбар ба байршилууд:</h1>
                <h1 className="text-lg font-bold pl-5">Бонус картны хүчин төгөлдөр үйлчлэх салбар ба байршилууд:</h1>
                <ul className="list-disc list-inside pl-10">
                    <li>ӨРГӨӨ 1&5 ХОРООЛОЛ хаяг: Баянгол дүүрэг, Ард Аюушийн Өргөн Чөлөө, 13-р хороо, 3-р хороололд байрлах Өргөө синема</li>
                    <li>ӨРГӨӨ 2 IT ПАРК хаяг: Сүхбаатар дүүрэг 8-р хороо, Амарын гудамж, Мэдээлэл Технологийн Үндэсний парк хойд жигүүр</li>
                    <li>ӨРГӨӨ 3 IMAX ШАНГРИ-ЛА ТӨВ хаяг: Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо, Олимпын гудамж, Шангри-Ла худалдааны төв</li>
                    <li>ӨРГӨӨ 4 ПАРК-ОД МОЛЛ хаяг: Улаанбаатар, Баянзүрх дүүрэг, 26-р хороо, Их Хүрээ гудамж, Парк-Од худалдааны төв</li>
                    <li>ӨРГӨӨ 6 ЭРДЭНЭТ ХОТ хаяг: Орхон аймаг Баян-Өндөр сум Цагаанчулуут баг 7а хороолол</li>
                    <li>ӨРГӨӨ 7 ДАРХАН ХОТ хаяг: Дархан-Уул аймаг Дархан хот 9-р баг, кино театр</li>
                </ul>
                <p className="text-lg font-bold pt-10 pl-5">Өргөө кинотеатрын дараах хэсгүүдэд хүчин төгөлдөр үйлчилж бонус төгрөг цуглуулах боломтой. Үүнд:</p>
                <ul className="list-disc list-inside pl-10">
                    <li>Мобайл апп</li>
                    <li>Киоск – Өргөө-1, Өргөө-2, Өргөө-3, Өргөө-4, Өргөө-5, Өргөө-6, Өргөө-7</li>
                    <li>Билет кассууд – Өргөө-1, Өргөө-2, Өргөө-3, Өргөө-4, Өргөө-5, Өргөө-6, Өргөө-7</li>
                    <li>Попкорн хэсгүүд – Өргөө-1, Өргөө-2, Өргөө-3, Өргөө-4, Өргөө-5, Өргөө-6, Өргөө-7</li>
                    <li>Тоглоомын төвүүд – Өргөө-1, Өргөө-2, Өргөө-3, Өргөө-4, Өргөө-5, Өргөө-6, Өргөө-7</li>
                    <li>Караоке – Өргөө-2, Өргөө-4</li>
                    <li>Вип болон Лоунж – Өргөө-1, Өргөө-3, Өргөө-5, Өргөө-6</li>
                </ul>
                <h1 className="text-2xl font-bold pt-10">Хэрхэн бонус картын хэрэглэгч болох талаар:</h1>
                <p className="text-lg pl-5">Бонус картын бүртгэлийг Өргөө 2 салбарт мэдээллийн ажилтан, Өргөө 1 салбарт 2 давхарт байрлах Лоунж хэсэгт хэрэглэгчийн төрсний гэрчилгээ болон иргэний үнэмлэхийг үндэслэн бүртгэнэ. Бүртгэхдээ дараах мэдээллийг хэрэглэгчээс авна</p>
                <ul className="list-disc list-inside pl-10">
                    <li>Овог нэр, хүйс, төрсөн он сар өдөр, регистерийн дугаар, утасны дугаар, имэйл хаяг, пин код</li>
                </ul>
                <h1 className="text-2xl font-bold pt-10">Бонус төгрөг шилжүүлэх:</h1>
                <ul className="list-disc list-inside pl-5">
                    <li>Таны цуглуулсан бонус карт бүх хэсэгт үйлчлэх бөгөөд энэхүү цуглуулсан бонус төгрөгийг өөр картруу шилжүүлэх боломжгүй ба зөвхөн хэрэглэгч хаяж үрэгдүүлсэн тохиолдолд хуучин картыг хүчингүй болгосны дараа шинэ картанд бонус оноог нөхөн олгох боломжтой болно.</li>
                </ul>
            </div>
        </div>
    );
}

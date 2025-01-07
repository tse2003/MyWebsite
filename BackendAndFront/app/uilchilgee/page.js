export default function Page() {
    return (
        <div className="m-auto w-full sm:w-[1000px]">
            <h1 className="text-white font-bold text-4xl text-center pt-5 pb-3">Үйлчилгээ</h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {/* Card 1 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/1.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Лавлах утасны үйлчилгээ бөгөөд та 77117711 дугаарт холбогдсоноор киноны цагийн хуваарь, дэлгэрэнгүй мэдээлэл, билет захиалах, удахгүй гарах кино болон бусад үйлчилгээний талаар лавлах, санал сэтгэгдэлээ хэлэх боломжтой.
                            Оператор 10:00-22:00 цагийн хооронд ажиллах бөгөөд бусад цагуудад автомат хариулагчаас мэдээлэл авах боломжтой.
                        </p>
                        <p className="text-white">
                            Tа лавлах утсаар захиалсан захиалгыг баталгаажуулахын тулд өөрийн биеээр кино эхлэхээс 30 минутын өмнө билет касс дээр хүрэлцэн ирж тасалбараа биечлэн авна.
                        </p>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/2.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Өргөө game land нь бүх насныхан тоглож болох 30 гаруй автомат тоглоомуудыг байрлууж бусад тоглоомын төвүүдээс ялгарах дотоод засал үйл ажиллагаа, зохион байгуулалттай. Монгол улсад бүх насныханд зориулсан шилдэг тоглооомын төв болсон бөгөөд соёлч боловсон ажилчид та бүхэнд эелдэг сайхан үйлчлэх болно.
                        </p>
                        <p className="text-white font-bold">Mini BOWLING</p>
                        <p className="text-white">
                            Bowlinf-ийн мини хувилбар бөгөөд 2 замтай энэхүү тоглоом нь найз нөхдөөрөө хамт ирж баг болон хуваагдан тоглоход илүү тохиромжтой юм. Бодит Мэдрэмжийг төрүүлээд зогсохгүй таниас ур чадварыг шаардах энэхүү тоглоом нь танд таалагдана гэдэгт итгэлтэй байна.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-5 justify-center">
                {/* Card 3 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/3.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Салбар бүрийн 2 давхарт байрлах Lounge нь та бүхэнд соёлтой үйлчилгээ тав тухтай байдлыг санал болгож байна. Мөн кино фанатууддаа зориулан кино бүрийн онцлогийг илэрхийлсэн өвөрмөц movie cocktail-оор үйлчилж байна.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Second Row of Cards */}
            <div className="flex flex-wrap gap-5 pt-5 justify-center">
                {/* Card 4 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/4.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Өргөө-2 салбарт байрлах сүүлийн үеийн тоног төхөөрөмжөөр тоноглогдсон караоке нь танд тав тух, соёлтой үйлчилгээг санал болгож байна.
                        </p>
                    </div>
                </div>
                </div>
                
                {/* Card 5 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/5.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Та кино үзвэрээ тухлан үзэхийн зэрэгцээ өөрийн хүссэн зүйлийг захиалж авах боломжоор хангассан нь танд гэртээ байгаа мэт сэтгэгдэлийг төрүүлэх болно.
                        </p>
                    </div>
                </div>
                
                {/* Card 6 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/6.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Амьд мэт мэдрэмжийг мэдрүүлэх 4D мини театр бөгөөд таны сонирхолыг татах 21 төрлийн замтай. Зам тус бүр өөр өөрсдийн онцлогтой учир таны хүссэн мэдрэмжийг танд мэдрүүлэх болно.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Third Row of Cards */}
            <div className="flex flex-wrap gap-5 pt-5 justify-center">
                {/* Card 7 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/7.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Өргөө-1 салбарт шинээр нээгдсэн “ЗӨӨЛӨН ТОГЛООМЫН ТӨВ”- д 0-5 насны хүүхдүүд тоглох боломжтой...
                        </p>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/8.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Өргөө кино театрын 5 дахь салбар болох Лазер кино театрын 4 дүгээр давхарт хэрэглэгчдийнхээ тав тухтай орчинд кино үзэх боломжоор хангасан Вип лоунж ажиллаж байна.
                        </p>
                    </div>
                </div>

                {/* Card 9 */}
                <div className="card glass w-full sm:w-96 lg:w-96">
                    <figure>
                        <img
                            src="./uilchilgee/9.jpg"
                            alt="service image"
                            className="object-cover h-48 w-full"
                        />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Тус ресторан баар нь нэг удаа 60-70 хүнд үйлчлэх хүчин чадалтай...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Page() {
    return (
        <div className="m-auto w-[1000px] h-full">
            <h1 className="text-white font-bold text-4xl text-center pt-5 pb-3">Үйлчилгээ</h1>
            <div className="flex gap-5">
                <div className="card glass w-96">
                    <figure>
                        <img
                        src="./uilchilgee/1.jpg"
                        alt="car!" />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Лавлах утасны үйлчилгээ бөгөөд та 77117711 дугаарт холбогдсоноор киноны цагийн хуваарь, дэлгэрэнгүй мэдээлэл, билет захиалах, удахгүй гарах кино болон бусад үйлчилгээний талаар лавлах, санал сэтгэгдэлээ хэлэх боломжтой.
                            Оператор 10:00-22:00 цагийн хооронд ажиллах бөгөөд бусад цагуудад автомат хариулагчаас мэдээлэл авах боломжтой.
                        </p>
                        <p className="text-white">
                            Tа лавлах утсаар захиалсан захиалгыг баталгаажуулахын тулд өөрийн биеээр кино эхлэхээс 30 минутын өмнө билет касс дээр хүрэлцэн ирж тасалбараа биечлэн авна.
                        </p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                </div>
                <div className="card glass w-96">
                    <figure>
                        <img
                        src="./uilchilgee/2.jpg"
                        alt="car!" />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Өргөө game land нь бүх насныхан тоглож болох 30 гаруй автомат тоглоомуудыг байрлууж бусад тоглоомын төвүүдээс ялгарах дотоод засал үйл ажиллагаа, зохион байгуулалттай. Монгол улсад бүх насныханд зориулсан шилдэг тоглооомын төв болсон бөгөөд соёлч боловсон ажилчид та бүхэнд эелдэг сайхан үйлчлэх болно.
                        </p>
                        <p className="text-white font-bold">Mini BOWLING</p>
                        <p className="text-white">
                            Bowlinf-ийн мини хувилбар бөгөөд 2 замтай энэхүү тоглоом нь найз нөхдөөрөө хамт ирж баг болон хуваагдан тоглоход илүү тохиромжтой юм. Бодит Мэдрэмжийг төрүүлээд зогсохгүй таниас ур чадварыг шаардах энэхүү тоглоом нь танд таалагдана гэдэгт итгэлтэй байна.
                        </p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                </div>
                <div className="card glass w-96">
                    <figure>
                        <img
                        src="./uilchilgee/3.jpg"
                        alt="car!" />
                    </figure>
                    <div className="card-body">
                        <p className="text-white">
                            Салбар бүрийн 2 давхарт байрлах Lounge нь та бүхэнд соёлтой үйлчилгээ тав тухтай байдлыг санал болгож байна. Мөн кино фанатууддаа зориулан кино бүрийн онцлогийг илэрхийлсэн өвөрмөц movie cocktail-оор үйлчилж байна.
                        </p>
                        {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="flex gap-5 pt-5">
                    <div className="card glass w-96">
                        <figure>
                            <img
                            src="./uilchilgee/4.jpg"
                            alt="car!" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">
                                Өргөө-2 салбарт байрлах сүүлийн үеийн тоног төхөөрөмжөөр тоноглогдсон караоке нь танд тав тух, соёлтой үйлчилгээг санал болгож байна.
                            </p>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                            src="./uilchilgee/5.jpg"
                            alt="car!" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">
                                Та кино үзвэрээ тухлан үзэхийн зэрэгцээ өөрийн хүссэн зүйлийг захиалж авах боломжоор хангассан нь танд гэртээ байгаа мэт сэтгэгдэлийг төрүүлэх болно. Хэрэв та манай театрын VIP үйлчилгээг сонгож байгаа бол үзвэрийн тасалбараа 2 давхарын Lounge-ийн хэсгээс худалдан авна уу.
                            </p>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                            src="./uilchilgee/6.jpg"
                            alt="car!" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">
                            Амьд мэт мэдрэмжийг мэдрүүлэх 4D мини театр бөгөөд таны сонирхолыг татах 21 төрлийн замтай. Зам тус бүр өөр өөрсдийн онцлогтой учир таны хүссэн мэдрэмжийг танд мэдрүүлэх болно.
                            </p>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 pt-5">
                    <div className="card glass w-96">
                        <figure>
                            <img
                            src="./uilchilgee/7.jpg"
                            alt="car!" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">
                                Өргөө-1 салбарт шинээр нээгдсэн “ЗӨӨЛӨН ТОГЛООМЫН ТӨВ”- д 0-5 насны хүүхдүүд тоглох боломжтой 2 талдаа гулсууртай, торон гүүртэй, дотроо бөмбөлөгтэй модон байшинтай. Байшингийн доод хэсэгт боксын мишок, үсэрдэг ор, эргэдэг автомат мотоцикол, элсний хэсэгтэйн дээр дотроо жижиг байшинтай хүүхдийн тоглоом, өрж эвлүүлдэг үсгэн тоглоом, дугуйтай морь, унадаг илжиг, унадаг машин, гүнжийн машинтай. Мөн манай тоглоомын төвд чихэр жимс уух зүйл зардаг хэсэг, хувцасны шүүгээ, хүүхдэд зориулсан эрэгтэй эмэгтэй нойл, угаалтуур, гар хатаагч болон хүлээлгийн хэсэгтэй. 2 давхрын кофе шопын хэсэгт 2 дэлгэц байршуулсан ба уг дэлгэцээр эцэг эхчүүд нь хүүхдийнхээ эрүүл аюулгүй цэвэр орчинд тоглож байгаа эсэхийг камераар харангаа кофе ууж суух ая тухтай боломжыг бүрдүүлж өгсөнөөрөө онцлогтой юм.
                            </p>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                            src="./uilchilgee/8.jpg"
                            alt="car!" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">
                                Өргөө кино театрын 5 дахь салбар болох Лазер кино театрын 4 дүгээр давхарт хэрэглэгчдийнхээ тав тухтай орчинд кино үзэх боломжоор хангасан Вип лоунж ажиллаж байна. Вип лоунжид Кино үзвэрийн билетийг худалдан авах, захиалгын билет гаргах, Өргөө Кино Театрын үйлчлүүлэгчийн хөнгөлөлтийн карт шинээр нээх, сунгах, сэргээх үйлчилгээ үзүүлэхээс гадна Мастер тогоочийн Европ, Монгол үндэстний зоог болон ундаа, ус, кофе зэрэг бүх төрлийн уух зүйл, амтатнаар үйлчилж байна. Вип лоунж нь 9 ширээ бүхий 24 суудалтайгаас гадна Лазер танхимын Вип лоунжийн хэсэгт кино үзвэрээр үйлчлүүлж байгаа үйлчлүүлэгчиддээ халуун кофе эсвэл ундаа, жүүсийг жигнэмэгийн хамт үнэгүй олгож үйлчилнэ. Тус вип лоунж нь тав тухтай тохилог орчинд кино үзэх онцгой интерьер бүхий вип танхимдаа тусгай зориулалтын 30 суудалтай, найрсаг үйлчилгээ авах бүрэн боломжтой.
                            </p>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div> */}
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                            src="./uilchilgee/9.jpg"
                            alt="car!" />
                        </figure>
                        <div className="card-body">
                            <p className="text-white">
                                Тус ресторан баар нь нэг удаа 60-70 хүнд үйлчлэх хүчин чадалтай, 40 хүнд үйлчлэх 2 караоке ВИП өрөөтэй. Караоке Бааранд бүх төрлийн хүлээн авалт, байгууллага хамт олны уулзалтын захиалга авч мэргэжлийн өндөр түвшинд найрсаг соёлтой хамт олон хэрэглэгч таныг угтан авч үйлчлэх болно.
                            </p>
                            {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                            </div> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}
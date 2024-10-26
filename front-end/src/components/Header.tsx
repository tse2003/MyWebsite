import Image from "next/image"

export default function Header() {
    return (
        <div className="text-white mt-[-10px] flex justify-between">
            <Image src="/logo.png" width={150} height={150} alt="logo"/>
            <div className="mt-5">
                <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Эхлэл</a>
                <a href="/comingsoon" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Тун удахгүй</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Хөтөлбөр</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Үйлчилгээ</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Бонус карт</a>
            </div>
            <div className="mt-5">
                <button type="button" className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Нэвтрэх</button>
            </div>
        </div>
    );
}
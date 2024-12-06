"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { MdEventSeat } from "react-icons/md";

export default function UserInfo() {
    const { data: session } = useSession();

    return (
        <div>
            <div className="p-5 card glass mb-10">
                <h1 className="text-center">Сайн байна уу?</h1>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
                    Log Out
                </button>
            </div>

            <div className="card glass p-6 text-white">
                <h1 className="text-center">Та киногоо захиална уу</h1>

                <form>
                    <label htmlFor="Branch" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Салбар:
                    </label>
                    <select
                        id="Branch"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="">Салбар сонгох</option>
                        <option value="branch1">Салбар 1</option>
                        <option value="branch2">Салбар 2</option>
                        <option value="branch3">Салбар 3</option>
                    </select>

                    <label htmlFor="Movie" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Кино:
                    </label>
                    <select
                        id="Movie"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="">Кино сонгох</option>
                        <option value="movie1">Кино 1</option>
                        <option value="movie2">Кино 2</option>
                        <option value="movie3">Кино 3</option>
                    </select>

                    <label htmlFor="Day" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Өдөр:
                    </label>
                    <select
                        id="Branch"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="">Өдөр сонгох</option>
                        <option value="branch1">Өдөр 1</option>
                        <option value="branch2">Өдөр 2</option>
                        <option value="branch3">Өдөр 3</option>
                    </select>

                    <label htmlFor="Time" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Цаг:
                    </label>
                    <select
                        id="Movie"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option value="">Цаг сонгох</option>
                        <option value="movie1">Цаг 1</option>
                        <option value="movie2">Цаг 2</option>
                        <option value="movie3">Цаг 3</option>
                    </select>
                    <label className="block mt-5 mb-2 text-lg text-center font-medium text-white">
                        Та суудлаа сонгоно уу!
                    </label>
                    <div className="flex gap-3 mt-3">
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                        <button><MdEventSeat /></button>
                    </div>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5">
                        Захиалах
                    </button>

                </form>
            </div>
        </div>
    );
}

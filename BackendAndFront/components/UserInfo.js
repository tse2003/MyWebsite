"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { MdEventSeat } from "react-icons/md";

export default function UserInfo() {
    const { data: session } = useSession();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [loading, setLoading] = useState(false);

    const toggleSeatSelection = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            movie: e.target.Movie.value,
            day: e.target.Day.value,
            time: e.target.Time.value,
            phone: e.target.Phone.value,
            address: e.target.Address.value,
            seats: selectedSeats,
        };

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message); // e.g., "Booking successful!"
                setSelectedSeats([]); // Clear selected seats after successful booking
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Failed to submit booking:", error);
            alert("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex">
            <div className="pr-5">
                <h1 className="text-center">Сайн байна уу?</h1>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
                >
                    Log Out
                </button>
            </div>

            <div className="card glass p-6 text-white">
                <h1 className="text-center text-2xl font-bold">ТА КИНОГОО ЗАХИАЛНА УУ</h1>

                <form onSubmit={handleSubmit}>
                    <div className="flex">
                    <div>
                    
                    <label htmlFor="Movie" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Кино:
                    </label>
                    <select
                        id="Movie"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        required
                    >
                        <option value="">Кино сонгох</option>
                        <option value="Z ZONE">Z ZONE</option>
                        <option value="Өмнөдийг зорих замд">Өмнөдийг зорих замд</option>
                        <option value="Дада">Дада</option>
                        <option value="Smile 2">Smile 2</option>
                    </select>

                    <label htmlFor="Day" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Өдөр:
                    </label>
                    <select
                        id="Day"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        required
                    >
                        <option value="">Өдөр сонгох</option>
                        <option value="2024-11-11">2024-11-11</option>
                        <option value="2024-11-12">2024-11-12</option>
                        <option value="2024-11-13">2024-11-13</option>
                        <option value="2024-11-14">2024-11-14</option>
                    </select>

                    <label htmlFor="Time" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Цаг:
                    </label>
                    <select
                        id="Time"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        required
                    >
                        <option value="">Цаг сонгох</option>
                        <option value="14:40">14:40</option>
                        <option value="15:20">15:20</option>
                        <option value="16:00">16:00</option>
                        <option value="18:30">18:30</option>
                    </select>

                    <label htmlFor="Phone" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Утасны дугаар:
                    </label>
                    <input
                        type="tel"
                        id="Phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        placeholder="Та утасны дугаараа оруулна уу"
                        required
                    />

                    <label htmlFor="Phone" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Хүргүүлэх хаяг:
                    </label>
                    <input
                        type="text"
                        id="Address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
                        placeholder="Та хаягаа оруулна уу"
                        required
                    />
                    </div>

                    <div className="pl-10">
                    <label className="block mt-5 mb-2 text-lg text-center font-medium text-white">
                        Та суудлаа сонгоно уу!
                    </label>
                    <div className="grid grid-cols-10 gap-3 mt-3">
                        {Array.from({ length: 50 }).map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => toggleSeatSelection(index + 1)}
                                className={`p-2 border rounded ${
                                    selectedSeats.includes(index + 1)
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-500 text-black"
                                }`}
                            >
                                <MdEventSeat />
                                {index + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full w-full mt-5"
                        disabled={loading}
                    >
                        {loading ? "Захиалж байна..." : "Захиалах"}
                    </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

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
            branch: e.target.Branch.value,
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
        <div>
            <div className="p-5 card glass mb-10">
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
                <h1 className="text-center">Та киногоо захиална уу</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="Branch" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Салбар:
                    </label>
                    <select
                        id="Branch"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
                        <option value="">Кино сонгох</option>
                        <option value="movie1">Кино 1</option>
                        <option value="movie2">Кино 2</option>
                        <option value="movie3">Кино 3</option>
                    </select>

                    <label htmlFor="Day" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Өдөр:
                    </label>
                    <select
                        id="Day"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
                        <option value="">Өдөр сонгох</option>
                        <option value="day1">Өдөр 1</option>
                        <option value="day2">Өдөр 2</option>
                        <option value="day3">Өдөр 3</option>
                    </select>

                    <label htmlFor="Time" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Цаг:
                    </label>
                    <select
                        id="Time"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    >
                        <option value="">Цаг сонгох</option>
                        <option value="time1">Цаг 1</option>
                        <option value="time2">Цаг 2</option>
                        <option value="time3">Цаг 3</option>
                    </select>

                    <label htmlFor="Phone" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Утасны дугаар:
                    </label>
                    <input
                        type="tel"
                        id="Phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Та утасны дугаараа оруулна уу"
                        required
                    />

                    <label htmlFor="Phone" className="block mt-5 mb-2 text-sm font-medium text-white">
                        Хүргүүлэх хаяг:
                    </label>
                    <input
                        type="text"
                        id="Address"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Та хаягаа оруулна уу"
                        required
                    />

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
                </form>
            </div>
        </div>
    );
}

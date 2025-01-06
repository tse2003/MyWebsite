"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { MdEventSeat } from "react-icons/md";

export default function UserInfo() {
    const { data: session } = useSession();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [loading, setLoading] = useState(false);
    const [bookedSeats, setBookedSeats] = useState([]);

    useEffect(() => {
        const fetchBookedSeats = async () => {
            try {
                const response = await fetch("/api/booking");

                // Check if the response is OK
                if (!response.ok) {
                    throw new Error(`Failed to fetch: ${response.statusText}`);
                }

                // Check if the response body is empty
                const responseText = await response.text();
                if (!responseText) {
                    console.error("Empty response body");
                    return;
                }

                // Parse the JSON response
                const data = JSON.parse(responseText);  // or response.json() if you are confident
                setBookedSeats(data.bookedSeats || []); // Set the booked seats state (empty array if none)
            } catch (error) {
                console.error("Failed to fetch booked seats:", error);
            }
        };

        fetchBookedSeats();
    }, []);

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
        <div className="min-h-screen flex flex-col pb-10 sm:pb-20">
            <div className="flex flex-col sm:flex-row sm:space-x-5 flex-grow">
                {/* User Info Section */}
                <div className="p-5 sm:w-1/3">
                    <h1 className="text-center">Сайн байна уу?</h1>
                    <div>
                        Email: <span className="font-bold">{session?.user?.email}</span>
                    </div>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-500 text-white font-bold px-6 py-2 mt-3 w-full sm:w-auto"
                    >
                        Log Out
                    </button>
                </div>

                {/* Booking Form Section */}
                <div className="card glass p-6 text-white sm:w-2/3">
                    <h1 className="text-center text-2xl font-bold">ТА КИНОГОО ЗАХИАЛНА УУ</h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            {/* Movie, Day, Time, Phone, and Address Fields */}
                            <div>
                                <label htmlFor="Movie" className="block mt-5 mb-2 text-sm font-medium text-white">
                                    Кино:
                                </label>
                                <select
                                    id="Movie"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5"
                                    required
                                >
                                    <option value="">Кино сонгох</option>
                                    <option value="Z ZONE">Z ZONE</option>
                                    <option value="Өмнөдийг зорих замд">Өмнөдийг зорих замд</option>
                                    <option value="Дада">Дада</option>
                                    <option value="Smile 2">Smile 2</option>
                                </select>

                                {/* Day, Time, Phone, Address Inputs (Similar to Movie selection) */}

                                <label htmlFor="Day" className="block mt-5 mb-2 text-sm font-medium text-white">
                                    Өдөр:
                                </label>
                                <select
                                    id="Day"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5"
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5"
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5"
                                    placeholder="Та утасны дугаараа оруулна уу"
                                    required
                                />

                                <label htmlFor="Address" className="block mt-5 mb-2 text-sm font-medium text-white">
                                    Хүргүүлэх хаяг:
                                </label>
                                <input
                                    type="text"
                                    id="Address"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-64 p-2.5"
                                    placeholder="Та хаягаа оруулна уу"
                                    required
                                />



                            </div>

                            {/* Seat Selection */}
                            <div className="mt-5">
                                <label className="block mb-2 text-lg text-center font-medium text-white">
                                    Та суудлаа сонгоно уу!
                                </label>
                                <div className="grid grid-cols-6 sm:grid-cols-10 gap-3">
                                    {Array.from({ length: 50 }).map((_, index) => {
                                        const seatNumber = index + 1;
                                        const isBooked = bookedSeats.includes(seatNumber);
                                        return (
                                            <button
                                                key={seatNumber}
                                                type="button"
                                                onClick={() => !isBooked && toggleSeatSelection(seatNumber)}
                                                className={`p-2 border rounded ${
                                                    selectedSeats.includes(seatNumber)
                                                        ? "bg-green-500 text-white"
                                                        : isBooked
                                                        ? "bg-red-600 text-white cursor-not-allowed"
                                                        : "bg-gray-500 text-black"
                                                }`}
                                                disabled={isBooked}
                                            >
                                                <MdEventSeat />
                                                {seatNumber}
                                            </button>
                                        );
                                    })}
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
        </div>
    );
}

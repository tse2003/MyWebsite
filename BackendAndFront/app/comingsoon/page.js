"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const getComings = async () => {
    try {
        const res = await fetch("/api/comings", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch comings");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading comings: ", error);
        return { comings: [] }; // Return empty array on error
    }
};

export default function ComingList() {
    const [comings, setComings] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedComing, setSelectedComing] = useState(null);

    useEffect(() => {
        const fetchComings = async () => {
            const data = await getComings();
            setComings(data.comings);
        };
        fetchComings();
    }, []);

    const handleOpenDialog = (coming) => {
        setSelectedComing(coming);
        setShowDialog(true);
    };

    const handleCloseDialog = () => {
        setSelectedComing(null);
        setShowDialog(false);
    };

    return (
        <>
            <h1 className="text-white text-center font-bold text-4xl pt-5">Тун удахгүй дэлгэцээр гарах кино</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {comings.map((rs) => (
                    <div key={rs._id} className="card glass text-white">
                        <figure>
                            <Image
                                src={rs.image}
                                alt={rs.title}
                                width={300}
                                height={200}
                                className="rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{rs.title}</h2>
                            <button
                                className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={() => handleOpenDialog(rs)}
                            >
                                Дэлгэрэнгүй
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showDialog && selectedComing && (
                <div className="modal modal-open">
                    <div className="modal-box card glass text-white">
                        <h2 className="text-2xl font-semibold mb-2">{selectedComing.title}</h2>
                        <Image
                            src={selectedComing.image}
                            alt={selectedComing.title}
                            width={300}
                            height={200}
                            className="rounded-lg mb-4"
                        />
                        <p><strong>Нас:</strong> +{selectedComing.age}</p>
                        <p><strong>Төрөл:</strong> {selectedComing.type}</p>
                        <p><strong>Үргэлжлэх хугацаа:</strong> {selectedComing.duration}</p>
                        <p><strong>Дэлгэцээр гарах огноо:</strong> {selectedComing.startDate}</p>
                        <strong className="mt-4">Тайлбар:</strong>
                        <p>{selectedComing.description}</p>
                        <div className="modal-action">
                            <button
                                className="text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-800/80 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                onClick={handleCloseDialog}
                            >
                                Хаах
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

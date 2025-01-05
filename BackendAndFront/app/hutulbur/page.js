"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const getTimes = async () => {
    try {
        const res = await fetch("/api/times", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch times");
        }
        return await res.json();
    } catch (error) {
        console.log("Error loading times: ", error);
        return { times: [] }; // Return empty array on error
    }
};

export default function Page() {
    const [times, setTimes] = useState([]);

    useEffect(() => {
        const fetchTimes = async () => {
            const data = await getTimes();
            setTimes(data.times || []);
        };
        fetchTimes();
    }, []);

    return (
        <div className="m-auto max-w-screen-xl px-4 py-8">
            <h1 className="text-white font-bold text-4xl text-center pt-5 pb-3">Цагийн хуваарь</h1>
            <div className="flex gap-5 flex-wrap justify-center">
                {times.map((time) => (
                    <div
                        key={time._id}
                        className="card glass w-full sm:w-80 md:w-96 lg:w-1/4 border border-gray-500 rounded-lg mb-5"
                    >
                        <figure className="overflow-hidden">
                            <Image
                                src={time.image}
                                alt={time.title}
                                width={384}
                                height={216}
                                className="rounded-t-lg object-cover w-full"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-white text-xl">{time.title}</h2>
                            <p className="text-white">{time.date}</p>
                            <div className="text-white mt-2">
                                {/* Display branches and times if they exist */}
                                {time.branch1 && (
                                    <div>
                                        <strong>{time.branch1}:</strong>
                                        <p>{time.time1}</p>
                                    </div>
                                )}
                                {time.branch2 && (
                                    <div>
                                        <strong>{time.branch2}:</strong>
                                        <p>{time.time2}</p>
                                    </div>
                                )}
                                {time.branch3 && (
                                    <div>
                                        <strong>{time.branch3}:</strong>
                                        <p>{time.time3}</p>
                                    </div>
                                )}
                                {time.branch4 && (
                                    <div>
                                        <strong>{time.branch4}:</strong>
                                        <p>{time.time4}</p>
                                    </div>
                                )}
                                {time.branch5 && (
                                    <div>
                                        <strong>{time.branch5}:</strong>
                                        <p>{time.time5}</p>
                                    </div>
                                )}
                                {time.branch6 && (
                                    <div>
                                        <strong>{time.branch6}:</strong>
                                        <p>{time.time6}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

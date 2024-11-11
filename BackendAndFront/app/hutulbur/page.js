"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const getTimes = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/times", {
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
        <div className="m-auto w-[1000px] h-full">
            <h1 className="text-white font-bold text-4xl text-center pt-5 pb-3">Цагийн хуваарь</h1>
            <div className="flex gap-5 flex-wrap justify-center">
                {times.map((time) => (
                    <div key={time._id} className="card glass w-96 border border-gray-500 rounded-lg">
                        <figure>
                            <Image
                                src={time.image}
                                alt={time.title}
                                width={384}
                                height={216}
                                className="rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-white">{time.title}</h2>
                            <p className="text-white">{time.date}</p>
                            <div className="text-white">
                                {/* Display branches and times if they exist */}
                                <strong>{time.branch1}:</strong>
                                {time.branch1 && <p>{time.time1}</p>}
                                <strong>{time.branch2}:</strong> 
                                {time.branch2 && <p>{time.time2}</p>}
                                <strong>{time.branch3}:</strong>
                                {time.branch3 && <p>{time.time3}</p>}
                                <strong>{time.branch4}:</strong> 
                                {time.branch4 && <p>{time.time4}</p>}
                                <strong>{time.branch5}:</strong> 
                                {time.branch5 && <p>{time.time5}</p>}
                                <strong>{time.branch6}:</strong>
                                {time.branch6 && <p>{time.time6}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

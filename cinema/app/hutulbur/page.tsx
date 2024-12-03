"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Define the Time type structure
interface Time {
  _id: string;
  title: string;
  image: string;
  date: string;
  branch1?: string;
  time1?: string;
  branch2?: string;
  time2?: string;
  branch3?: string;
  time3?: string;
  branch4?: string;
  time4?: string;
  branch5?: string;
  time5?: string;
  branch6?: string;
  time6?: string;
}

const getTimes = async (): Promise<{ times: Time[] }> => {
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
  const [times, setTimes] = useState<Time[]>([]);

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
                {time.branch1 && (
                  <>
                    <strong>{time.branch1}:</strong>
                    <p>{time.time1}</p>
                  </>
                )}
                {time.branch2 && (
                  <>
                    <strong>{time.branch2}:</strong>
                    <p>{time.time2}</p>
                  </>
                )}
                {time.branch3 && (
                  <>
                    <strong>{time.branch3}:</strong>
                    <p>{time.time3}</p>
                  </>
                )}
                {time.branch4 && (
                  <>
                    <strong>{time.branch4}:</strong>
                    <p>{time.time4}</p>
                  </>
                )}
                {time.branch5 && (
                  <>
                    <strong>{time.branch5}:</strong>
                    <p>{time.time5}</p>
                  </>
                )}
                {time.branch6 && (
                  <>
                    <strong>{time.branch6}:</strong>
                    <p>{time.time6}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

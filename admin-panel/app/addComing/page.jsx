"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddComing() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("/images/1.jpg");
    const [age, setAge] = useState(1);
    const [type, setType] = useState("");
    const [duration, setDuration] = useState("");
    const [startDate, setStartDate] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !image) {
            alert("Title and image are required");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/comings", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, image, age, type, duration, startDate, description })
            });
            if (res.ok) {
                router.push("/comings");
            } else {
                throw new Error("Failed to create a Coming");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold py-10 text-2xl">Add new coming</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Title"
                />
                <input 
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="/images/1.jpg"
                />
                <input 
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="number"
                    placeholder="1"
                />
                <input 
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Type"
                />
                <input 
                    onChange={(e) => setDuration(e.target.value)}
                    value={duration}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Duration"
                />
                <input 
                    onChange={(e) => setStartDate(e.target.value)}
                    value={startDate}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="StartDate"
                />
                <input 
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Description"
                />
                <button 
                    type="submit"
                    className="btn btn-primary w-full max-w-xs"
                >
                    Add Coming
                </button>
            </form>
        </>
    );
}
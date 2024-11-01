"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditMovieForm({ id, title, image, age, type, duration, description }) {
    const [newTitle, setNewTitle] = useState(title || '');
    const [newImage, setNewImage] = useState(image || '');
    const [newAge, setNewAge] = useState(age || '');
    const [newType, setNewType] = useState(type || '');
    const [newDuration, setNewDuration] = useState(duration || '');
    const [newDescription, setNewDescription] = useState(description || '');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newImage, newAge, newType, newDuration, newDescription }),
            });
            if (!res.ok) {
                throw new Error("Failed to update Movie");
            }
            router.refresh();
            router.push("/movies");
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold py-10 text-2xl">Update Movie</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewImage(e.target.value)}
                    value={newImage}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewAge(e.target.value)}
                    value={newAge}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewType(e.target.value)}
                    value={newType}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewDuration(e.target.value)}
                    value={newDuration}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <button className="btn btn-primary w-full max-w-xs">
                    Update Movie
                </button>
            </form>
        </>
    );
}
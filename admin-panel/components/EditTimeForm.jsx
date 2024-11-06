"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTimeForm({ id, title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 }) {
    const [newTitle, setNewTitle] = useState(title || '');
    const [newImage, setNewImage] = useState(image || '');
    const [newDate, setNewDate] = useState(date || '');
    const [newBranch1, setNewBranch1] = useState(branch1 || '');
    const [newTime1, setNewTime1] = useState(time1 || '');
    const [newBranch2, setNewBranch2] = useState(branch2 || '');
    const [newTime2, setNewTime2] = useState(time2 || '');
    const [newBranch3, setNewBranch3] = useState(branch3 || '');
    const [newTime3, setNewTime3] = useState(time3 || '');
    const [newBranch4, setNewBranch4] = useState(branch4 || '');
    const [newTime4, setNewTime4] = useState(time4 || '');
    const [newBranch5, setNewBranch5] = useState(branch5 || '');
    const [newTime5, setNewTime5] = useState(time5 || '');
    const [newBranch6, setNewBranch6] = useState(branch6 || '');
    const [newTime6, setNewTime6] = useState(time6 || '');
    
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/times/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newImage, newDate, newBranch1, newTime1, newBranch2, newTime2, newBranch3, newTime3, newBranch4, newTime4, newBranch5, newTime5, newBranch6, newTime6 }),
            });
            if (!res.ok) {
                throw new Error("Failed to update Movie");
            }
            router.refresh();
            router.push("/times");
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
                    onChange={(e) => setNewDate(e.target.value)}
                    value={newDate}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewBranch1(e.target.value)}
                    value={newBranch1}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewTime1(e.target.value)}
                    value={newTime1}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewBranch2(e.target.value)}
                    value={newBranch2}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewTime2(e.target.value)}
                    value={newTime2}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewBranch3(e.target.value)}
                    value={newBranch3}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewTime3(e.target.value)}
                    value={newTime3}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                /> 
                <input 
                    onChange={(e) => setNewBranch4(e.target.value)}
                    value={newBranch4}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewTime4(e.target.value)}
                    value={newTime4}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewBranch5(e.target.value)}
                    value={newBranch5}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewTime5(e.target.value)}
                    value={newTime5}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewBranch6(e.target.value)}
                    value={newBranch6}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                />
                <input 
                    onChange={(e) => setNewTime6(e.target.value)}
                    value={newTime6}
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
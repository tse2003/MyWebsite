"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTime() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("/images/1.jpg");
    const [date, setDate] = useState("");
    const [branch1, setBranch1] = useState("");
    const [time1, setTime1] = useState("");
    const [branch2, setBranch2] = useState("");
    const [time2, setTime2] = useState("");
    const [branch3, setBranch3] = useState("");
    const [time3, setTime3] = useState("");
    const [branch4, setBranch4] = useState("");
    const [time4, setTime4] = useState("");
    const [branch5, setBranch5] = useState("");
    const [time5, setTime5] = useState("");
    const [branch6, setBranch6] = useState("");
    const [time6, setTime6] = useState("");
    

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !image) {
            alert("Title and image are required");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/times", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 })
            });
            if (res.ok) {
                router.push("/times");
            } else {
                throw new Error("Failed to create a Time");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="font-bold py-10 text-2xl">Add new movie</h1>
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
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Date"
                />
                <input 
                    onChange={(e) => setBranch1(e.target.value)}
                    value={branch1}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Branch 1"
                />
                <input 
                    onChange={(e) => setTime1(e.target.value)}
                    value={time1}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Time 1"
                />
                <input 
                    onChange={(e) => setBranch2(e.target.value)}
                    value={branch2}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Branch 2"
                />
                <input 
                    onChange={(e) => setTime2(e.target.value)}
                    value={time2}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Time 2"
                />
                <input 
                    onChange={(e) => setBranch3(e.target.value)}
                    value={branch3}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Branch 3"
                />
                <input 
                    onChange={(e) => setTime3(e.target.value)}
                    value={time3}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Time 3"
                />
                <input 
                    onChange={(e) => setBranch4(e.target.value)}
                    value={branch4}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Branch 4"
                />
                <input 
                    onChange={(e) => setTime4(e.target.value)}
                    value={time4}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Time 4"
                />
                <input 
                    onChange={(e) => setBranch5(e.target.value)}
                    value={branch5}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Branch 5"
                />
                <input 
                    onChange={(e) => setTime5(e.target.value)}
                    value={time5}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Time 5"
                />
                <input 
                    onChange={(e) => setBranch6(e.target.value)}
                    value={branch6}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Branch 6"
                />
                <input 
                    onChange={(e) => setTime6(e.target.value)}
                    value={time6}
                    className="input input-bordered input-accent w-full max-w-xs"
                    type="text"
                    placeholder="Time 6"
                />
                <button
                    type="submit"
                    className="btn btn-primary w-full max-w-xs"
                >
                    Add Movie
                </button>
            </form>
        </>
    );
}
"use client";

import { useRouter } from "next/navigation";

export default function RemoveMovie({ id }) {
    const router = useRouter();
    const removeMovie = async () => {
        const confirmed = confirm("Are you sure?");
        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/movies?id=${id}`, {
                method: "DELETE",
            });
            if(res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeMovie} className="btn btn-error ml-2">
            Delete
        </button>
    );
}
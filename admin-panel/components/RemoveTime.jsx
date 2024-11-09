"use client";

import { useRouter } from "next/navigation";

export default function RemoveTime({ id }) {
    const router = useRouter();
    const removeTime = async () => {
        const confirmed = confirm("Та итгэлтэй байна уу?");
        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/times?id=${id}`, {
                method: "DELETE",
            });
            if(res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeTime} className="btn btn-error ml-2">
            Delete
        </button>
    );
}
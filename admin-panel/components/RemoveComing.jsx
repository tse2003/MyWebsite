"use client";

import { useRouter } from "next/navigation";

export default function RemoveComing({ id }) {
    const router = useRouter();
    const removeComing = async () => {
        const confirmed = confirm("Are you sure?");
        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/comings?id=${id}`, {
                method: "DELETE",
            });
            if(res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeComing} className="btn btn-error ml-2">
            Delete
        </button>
    );
}
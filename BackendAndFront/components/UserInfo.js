"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const { data: session } = useSession();

    return (
        <div>
            <div className="p-5 card glass">
                <h1 className="text-center">Сайн байна уу?</h1>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 text-white font-bold px-6 py-2 mt-3">
                    Log Out
                </button>
            </div>
        </div>
    );
} 
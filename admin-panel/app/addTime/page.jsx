"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddTime() {
    const [movies, setMovies] = useState([]); // State for storing movies
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

    // Fetch movies from API
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/movies");
                const data = await res.json();

                // Check if 'movies' exists and is an array
                if (Array.isArray(data.movies)) {
                    setMovies(data.movies);
                } else {
                    console.error("Unexpected API response:", data);
                    setMovies([]); // Set an empty array if response is invalid
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                setMovies([]); // Set an empty array on fetch failure
            }
        };

        fetchMovies();
    }, []);

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
                body: JSON.stringify({
                    title,
                    image,
                    date,
                    branch1,
                    time1,
                    branch2,
                    time2,
                    branch3,
                    time3,
                    branch4,
                    time4,
                    branch5,
                    time5,
                    branch6,
                    time6,
                }),
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
        <div className="p-10 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">Цагийн хуваарь /нэмэх/</h1>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Нэр</span>
                    </label>
                    <select
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="select select-bordered select-accent w-full"
                    >
                        <option value="" disabled>
                            Сонгох
                        </option>
                        {movies.map((movie) => (
                            <option key={movie._id} value={movie.title}>
                                {movie.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Зураг</span>
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                        className="input input-bordered input-accent w-full"
                        type="text"
                        placeholder="/images/1.jpg"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Огноо</span>
                    </label>
                    <input
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                        className="input input-bordered input-accent w-full"
                        type="date"
                    />
                </div>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Салбар - {i + 1}</span>
                            </label>
                            <input
                                onChange={(e) => eval(`setBranch${i + 1}`)(e.target.value)}
                                value={eval(`branch${i + 1}`)}
                                className="input input-bordered input-accent w-full"
                                type="text"
                                placeholder="Бичих"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Цаг</span>
                            </label>
                            <input
                                onChange={(e) => eval(`setTime${i + 1}`)(e.target.value)}
                                value={eval(`time${i + 1}`)}
                                className="input input-bordered input-accent w-full"
                                type="text"
                                placeholder="Бичих"
                            />
                        </div>
                    </div>
                ))}
                <button type="submit" className="btn btn-primary w-full mt-6">
                    Add Movie
                </button>
            </form>
        </div>
    );
}

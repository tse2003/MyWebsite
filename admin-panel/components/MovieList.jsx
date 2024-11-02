import Image from "next/image";
import Link from "next/link";
import RemoveMovie from "./RemoveMovie";

const getMovies = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/movies", {
            cache: "no-store",
        });
        if(!res.ok) {
            throw new Error("Failed to fetch movies");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading movies: ", error)
    }
};

export default async function MovieList() {
    const { movies } = await getMovies();
    return (
        <>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold py-10 text-2xl">CRUD</h1>
                </div>
                <div className="text-right">
                    <Link className="btn btn-primary" href={"/addMovie"}>
                        Add movie
                    </Link>
                </div>
                <table className="table">
                <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>age</th>
                            <th>type</th>
                            <th>duration</th>
                            <th>description</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((rs) => (
                            <tr className="hover" key={rs._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                                <Image 
                                                    src={rs.image}
                                                    alt={rs.title}
                                                    width={80}
                                                    height={80}
                                                    className="rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{rs.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>+{rs.age}</td>
                                <td>{rs.type}</td>
                                <td>{rs.duration}</td>
                                <td className="w-[350px]">{rs.description}</td>
                                <th>
                                <Link href={`/editMovie/${rs._id}`}>
                                        <button className="btn btn-primary">Edit</button>
                                    </Link>
                                    <RemoveMovie id={rs._id} />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
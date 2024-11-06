import Image from "next/image";
import Link from "next/link";
import RemoveTime from "./RemoveTime";

const getTimes = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/times", {
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

export default async function TimeList() {
    const { times } = await getTimes();
    console.log(times)
    return (
        <>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold py-10 text-2xl">CRUD</h1>
                </div>
                <div className="text-right">
                    <Link className="btn btn-primary" href={"/addTime"}>
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
                                <th>title</th>
                                <th>date</th>
                                <th>branch1</th>
                                <th>time1</th>
                                <th>branch2</th>
                                <th>time2</th>
                                <th>branch3</th>
                                <th>time3</th>
                                <th>branch4</th>
                                <th>time4</th>
                                <th>branch5</th>
                                <th>time5</th>
                                <th>branch6</th>
                                <th>time6</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                        {times.map((rs) => (
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
                                <td>{rs.date}</td>
                                <td>{rs.branch1}</td>
                                <td>{rs.time1}</td>
                                <td>{rs.branch2}</td>
                                <td>{rs.time2}</td>
                                <td>{rs.branch3}</td>
                                <td>{rs.time3}</td>
                                <td>{rs.branch4}</td>
                                <td>{rs.time4}</td>
                                <td>{rs.branch5}</td>
                                <td>{rs.time5}</td>
                                <td>{rs.branch6}</td>
                                <td>{rs.time6}</td>
                                
                                
                                <th>
                                <Link href={`/editTime/${rs._id}`}>
                                        <button className="btn btn-primary">Edit</button>
                                    </Link>
                                    <RemoveTime id={rs._id} />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
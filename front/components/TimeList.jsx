import Image from "next/image";
import Link from "next/link";
import RemoveTime from "./RemoveTime";

const getTimes = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/times", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch times");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading times: ", error);
    }
};

export default async function TimeList() {
    const { times } = await getTimes();
    return (
        <>
            <div className="overflow-x-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800">Цагийн хуваарь</h1>
                    <div className="text-right">
                        <Link className="btn btn-primary" href={"/addTime"}>
                            Нэмэх
                        </Link>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full text-left">
                        <thead className="bg-primary text-white">
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                    </label>
                                </th>
                                <th>Нэр</th>
                                <th>Огноо</th>
                                <th>Салбар - 1</th>
                                <th>Цаг</th>
                                <th>Салбар - 2</th>
                                <th>Цаг</th>
                                <th>Салбар - 3</th>
                                <th>Цаг</th>
                                <th>Салбар - 4</th>
                                <th>Цаг</th>
                                <th>Салбар - 5</th>
                                <th>Цаг</th>
                                <th>Салбар - 6</th>
                                <th>Цаг</th>
                                <th className="text-center">Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody>
                            {times.map((rs) => (
                                <tr key={rs._id} className="hover:bg-gray-100">
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox checkbox-primary" />
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
                                                <div className="font-semibold text-lg">{rs.title}</div>
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
                                    
                                    <td className="text-center">
                                        <Link href={`/editTime/${rs._id}`}>
                                            <button className="btn btn-info btn-sm ml-2 mb-2">Edit</button>
                                        </Link>
                                        <RemoveTime id={rs._id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

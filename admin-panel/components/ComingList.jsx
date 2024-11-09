import Image from "next/image";
import Link from "next/link";
import RemoveComing from "./RemoveComing";

const getComings = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/comings", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch comings");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading comings: ", error);
    }
};

export default async function ComingList() {
    const { comings } = await getComings();
    return (
        <>
            <div className="overflow-x-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800">Тун удахгүй дэлгэцээр гарах кинонууд:</h1>
                    <div className="text-right">
                        <Link className="btn btn-primary" href={"/addComing"}>
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
                                <th>Нас</th>
                                <th>Төрөл</th>
                                <th>Үргэлжлэх хугацаа</th>
                                <th>Дэлгэцээр гарах өдөр</th>
                                <th>Тайлбар</th>
                                <th className="text-center">Үйлдэл</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comings.map((rs) => (
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
                                    <td>+{rs.age}</td>
                                    <td>{rs.type}</td>
                                    <td>{rs.duration}</td>
                                    <td>{rs.startDate}</td>
                                    <td className="w-[350px]">{rs.description}</td>
                                    <td className="text-center">
                                        <Link href={`/editComing/${rs._id}`}>
                                            <button className="btn btn-info btn-sm">Засах</button>
                                        </Link>
                                        <RemoveComing id={rs._id} />
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

import Link from "next/link";

export default async function ProductsList() {
    return (
        <>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold py-10 text-2xl">CRUD</h1>
                </div>
                <div className="text-right">
                    <Link className="btn btn-primary" href={"/addProduct"}>
                        Add Product
                    </Link>
                </div>
            </div>
        </>
    );
}
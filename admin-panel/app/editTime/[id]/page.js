import EditTimeForm from "@/components/EditTimeForm";

const getTimeById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/times/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch time");
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
};

export default async function EditTime({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { time } = await getTimeById(id);
    const { title, image, date, branch1, time1, branch2, time2, branch3, time3, branch4, time4, branch5, time5, branch6, time6 } = time;
    return <EditTimeForm id={id} title={title} image={image} date={date} branch1={branch1} time1={time1} branch2={branch2} time2={time2} branch3={branch3} time3={time3} branch4={branch4} time4={time4} branch5={branch5} time5={time5} branch6={branch6} time6={time6} />
}
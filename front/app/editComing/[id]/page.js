import EditComingForm from "@/components/EditComingForm";


const getComingById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/comings/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch movie");
        }
        return res.json();
    } catch (error) {
        console.log(error)
    }
};

export default async function EditComing({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { coming } = await getComingById(id);
    const { title, image, age, type, duration, startDate, description} = coming;
    return <EditComingForm id={id} title={title} image={image} age={age} type={type} duration={duration} startDate={startDate} description={description} />
}
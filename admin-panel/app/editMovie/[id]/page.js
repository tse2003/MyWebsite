import EditMovieForm from "@/components/EditMovieForm";

const getMovieById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/movies/${id}`, {
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

export default async function EditMovie({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;
    const { movie } = await getMovieById(id);
    const { title, image, age, type, duration, description} = movie;
    return <EditMovieForm id={id} title={title} image={image} age={age} type={type} duration={duration} description={description} />
}
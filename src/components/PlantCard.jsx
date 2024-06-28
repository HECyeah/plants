
import Image from "next/image";
import Link from "next/link"

export function PlantCard({ plant }) {


    console.log(plant.plant_id)
    return (
        <div>
            <Link className="plantcard" href={`/${plant.plant_id}`}>
                <Image height={400} width={250} src={plant.img_url} />
                <h2>{plant.plant_name}</h2>
                <p><b>Maintenance Rating: </b>{plant.ease_rating}</p>
            </Link>

        </div>
    )


}
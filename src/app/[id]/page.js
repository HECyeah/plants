import { connect } from "@/components/page"
import Image from "next/image"
import Link from "next/link";
import { LikeButon } from "@/components/LikeButon"
import { NavBar } from "@/components/NavBar"

export default async function PlantPage({ params }) {
    const db = connect()

    const plants = (await db.query(`SELECT * FROM plants WHERE plant_id = $1`,
        [params.id])).rows[0]
    console.log(params)


    return (
        <div>
            <NavBar />
            <h2>{plants.plant_name}</h2>
            <p><b>Flowering Seasons:</b> {plants.flowering_season}</p>
            <p><b>Is the Plant Harmful or Toxic: </b>{plants.harmful}</p>
            <Image src={plants.img_url} width={200} height={300} />
            <p><b>How to Maintain: </b>{plants.how_to_maintain}</p>
            <p><b>Maintenance Rating: </b>{plants.id_difficulty_rating}</p>
            <LikeButon />
        </div>


    )
}


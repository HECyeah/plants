import { connect } from "@/components/page"
import Link from "next/link";
import { NavBar } from "@/components/NavBar"

export default function AddPlants() {

    async function handleAddPlants(formData) {
        "use server"
        //{plant_id, plant_name, flowering_season, harmful, how_to_maintain, img_url, ease_rating} 
        const plant_name = formData.get("plant_name")
        const flowering_season = formData.get("flowering_season")
        const harmful = formData.get("harmful")
        const how_to_maintain = formData.get("how_to_maintain")
        const img_url = formData.get("img_url")
        const ease_rating = formData.get("ease_rating")

        console.log(plant_name, flowering_season, harmful, how_to_maintain, img_url, ease_rating)

        const db = connect()
        db.query('INSERT INTO PLANTS(plant_name, flowering_season, harmful, how_to_maintain, img_url, ease_rating) VALUES ($1, $2, $3, $4, $5, $6)', [plant_name, flowering_season, harmful, how_to_maintain, img_url, ease_rating])
        console.log(plant_name, flowering_season, harmful, how_to_maintain, img_url, ease_rating)

    }



    return (
        <div>
            <NavBar />
            <h2>Add A New Plant</h2>
            <form action={handleAddPlants} className="form">
                <label htmlFor="plant_name">Plant Type</label>
                <input placeholder="Plant Type" name="plant_name" id="plant_name"></input>

                <label htmlFor="flowering_season">Flowering Season</label>
                <input placeholder="Spring, Summer, Autum, Winter" name="flowering_season" id="flowering_season"></input>

                <label htmlFor="harmful">Is the Plant Toxic, Poisonous or Harmful in any Way?</label>
                <input placeholder="Yes/No" name="harmful" id="harmful"></input>

                <label htmlFor="how_to_maintain">How do You Maintain This Plant?</label>
                <input placeholder="how_to_maintain" name="how_to_maintain" id="how_to_maintain"></input>

                <label htmlFor="img_url">Enter a Photo of Your Plant</label>
                <input placeholder="img_url" name="img_url" id="img_url"></input>

                <label htmlFor="ease_rating">What is the Ease Rating?</label>
                <input placeholder="Easy/Intermediate/Hard" name="ease_rating" id="ease_rating"></input>

                <button>Submit</button>
            </form>
        </div>
    )
}
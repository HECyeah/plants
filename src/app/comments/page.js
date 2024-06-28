import { connect } from "@/components/page"
import Image from "next/image"
import Link from "next/link";
import { LikeButon } from "@/components/LikeButon"
import db from "@/components/page"
import { NavBar } from "@/components/NavBar"
import { CommentCard } from "@/components/CommentCard"

export default async function Comments({ params }) {
    const db = connect()


    const plant_comments = (await db.query('SELECT * FROM plant_comments')).rows
    console.log(plant_comments)

    return (
        <div>
            <NavBar />
            <h2>Comments</h2>
            <p>Post about your plant experience!</p>
            <div className="comment">
                {plant_comments.map((plant_comment) => {
                    return (
                        <CommentCard plant_comment={plant_comment} />
                    )
                })}
            </div>
        </div>


    )
}


import Image from "next/image";
import Link from "next/link"

export function CommentCard({ Comment }) {


    console.log(plant_comments.id_comments)
    return (
        <div>
            <Link className="comments" href={`/${plant_comments.comments_id}`}>
                <p><b>Plant:</b> {plant_comments.plant_name}</p>
                <p><b>Comment: </b>{plant_comments.comments}</p>
            </Link>

        </div>
    )


}
<div>

</div>
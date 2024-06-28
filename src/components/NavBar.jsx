import Link from "next/link";

export function NavBar() {


    return (
        <div className="pink">
            <h1>Hull & Home</h1>
            <nav className="nav">
                <ul className="nav">
                    <li><Link href="/" className="nav">Home</Link></li>
                    <li><Link href="/add-plant" className="nav">Add a Plant</Link></li>
                    <li><Link href="/" className="nav">Discussion Board</Link></li>
                </ul>
            </nav>
        </div>

    )

}


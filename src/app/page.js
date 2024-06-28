import Image from "next/image";
import Link from "next/image";
import { connect } from "@/components/page"
import pg from "pg"
import { PlantCard } from "@/components/PlantCard"
import { NavBar } from "@/components/NavBar"


export default async function Home() {

  const db = connect()

  const plants = (await db.query('SELECT * FROM plants')).rows
  console.log(plants)

  return (
    <body>
      <NavBar />
      <div className="intro">
        <p>Whether you are an experienced plant parent or just starting out, Hull & Home is a community for you! We want to create a green space where people can come together discus the plants living in Hull. </p>
      </div>
      <div className="plants">
        {plants.map((plant) => {
          return (
            <PlantCard plant={plant} />
          )
        })}
      </div>
    </body>
  );
}

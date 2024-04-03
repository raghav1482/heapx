'use client'
import Image from "next/image"
const Card = ({img,name}) => {
  return (
    <div className="card flex flex-col">
      <Image src={img}/>
      <h3 style={{fontSize:"16px",fontWeight:"600"}}>{name}</h3>
      <div className="card-sub1 flex w-100">
        <div className="card-sub2">
            <h4 style={{color:"grey"}}>Total Events</h4>
            <h3>40 Events</h3>
        </div>
        <div className="card-sub2">
            <h4 style={{color:"grey"}}>Sport</h4>
            <h3>Soccur</h3>
        </div>
      </div>
    </div>
  )
}

export default Card

import Card from "./Card";
import i1 from "../imgs/1.png";
import i2 from "../imgs/2.png";
import i3 from "../imgs/3.png";
import i4 from "../imgs/4.png";
import i5 from "../imgs/5.png";
import Image from "next/image"
const TopContain = () => {
    const arr = [
      {
        i:i1,
        name:"Sacramento River Cats"
      },
      {
        i:i2,
        name:"Las Vegas Aviators"
      },
      {
        i:i3,
        name:"New Jersey Devils"
      },
      {
        i:i4,
        name:"Las Vegas Aviators"
      },
    ];
  return (<>
    <div className="flex topcon">
        {arr.map((e,index)=>{return <Card img={e.i} name={e.name} key={index}/>})}
        <div className="card add">
        <Image src={i5}/>
        <h2 className="my-5" style={{fontWeight:"800",fontSize:"20px"}}>Advertisement title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">See More</button>
        </>
  )
}

export default TopContain

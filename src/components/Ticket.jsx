import Image from "next/image"

const Ticket = ({img}) => {
  return (
    <div className="card flex flex-col tkt">
      <Image src={img} />
      <div className="card-sub1">
        <h2 style={{fontSize:"16px"}}>Las Vegas Aviators</h2>
        <p style={{fontSize:"13px",color:"#BBBBBB"}}>OCT 15|SUN|4:36</p>
        <p style={{fontSize:"13px",textWrap:"wrap",color:"#BBBBBB"}}>Lad Vegas Ballpark , Las Vegas,Nevada</p>
        <button className="tkt-btn">Take Flight</button>
      </div>
    </div>
  )
}

export default Ticket

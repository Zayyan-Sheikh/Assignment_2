import Link from "next/link";

function Header () {
    return(
     <div style={{paddingTop:"24px",paddingBottom:"24px"}}>
      <ul>
        <span style={{padding:"24px",paddingLeft:"700px",}}><a href = "/Home">Home</a></span>
        <span style={{padding:"24px"}}><a href = "/Contact">Contact</a></span>
        <span style={{padding:"24px"}}><a href = "/Services">Services</a></span>
        <span style={{padding:"24px"}}><a href = "/About">About</a></span>
      </ul>
     </div>
    )
}

export default Header;
import smile from "src/assets/img/smile.png"

const ComingSoon = () => {
  return(
      <div style={{
          fontSize:"32px",
          // maxWidth:"500px",
          textAlign:"center",
          margin:"0 auto",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexDirection:"column",
          height:"100vh"
      }}><p style={{color:"#0148FF"}}>Something good is coming soon!</p>
         <p style={{display:"flex", gap:"10px"}}> Stay tuned <img src={smile} alt="smile" style={{height:"48px"}}/></p></div>
  )
}
export default ComingSoon
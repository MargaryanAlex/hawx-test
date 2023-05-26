import smile from "src/assets/img/smile.png"
import logo from "src/assets/img/hawxAsset 2.svg"

const ComingSoon = () => {
    return (
        <div style={{
            fontSize: "32px",
            // maxWidth:"500px",
            padding: "0 20px",
            textAlign: "center",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "100vh"
        }}><img src={logo} alt="" style={{
            maxWidth: "120px", marginBottom: "68px"
        }}/>
            <p style={{color: "#0148FF"}}>Something amazing is coming soon!</p>
            <p style={{display: "flex", gap: "10px"}}> Stay tuned <img src={smile} alt="smile"
                                                                       style={{height: "48px"}}/></p></div>
    )
}
export default ComingSoon
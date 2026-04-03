export default function Price({oldPrice , newPrice}){
    let oldStyles = {
        textDecorationLine: "Line-through",
    };
    let newStyles ={
        fontWeight:"bold"
    };
    
    
    let styles = {
  backgroundColor: "#e0c367",
  height: "40px",

  
  
  borderBottomLeftRadius: "14px",
  borderBottomRightRadius: "14px",
  textAlign: "center",
  marginTop: "auto"   // 👈 ADD THIS
};

    return (
          <div style = {styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
          </div>
    );
}
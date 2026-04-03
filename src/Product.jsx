import "./Product.css";
import Price from "./Price.jsx";


function Product({title,idx}){
  let oldPrices = ["10,495" , "11,999","1500" , "589"];
  let newPrices = ["9999" , "10500","1350" ,"400"];
  let description =[["8000 DPI","5 buttons"] 
  ,["intutive surface","designed for iPad Pro"],
  [" designed for ipad pro","intutive surface"],
  ["Wireless","optical orientation"]];
    return (
        <div className="Product">
              <h4>{title}</h4>
             <p>{description[idx][0]}</p>
             <p>{description[idx][1]}</p>
             <Price oldPrice ={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}
export default Product;
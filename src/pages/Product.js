import { useParams } from "react-router-dom";
import { getProductsByID } from "./data";

export default function Product() {
    const param = useParams();
    const data = getProductsByID(parseInt(param.id));
    const myStyle = {
        color: "blue",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        fontFamily: "Sans-Serif",
    };
    return (
        <div>
            <h2 style={myStyle}>Product Detail: {data.name}</h2>
        </div>
    );
}

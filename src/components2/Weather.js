import { useEffect, useState } from "react";
import axios from "axios";
export default function Weather() {
    const [data, setData] = useState(null);
    const [text, setText] = useState("Ha Noi");
    const getData = async () => {
        const apiKey = "52ebcf0a4429a763cb835c2c9a524629";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apiKey}`;
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                if (error.response.status == "404") {
                    alert("invalid city name");
                }
            });
    };
    useEffect(() => {
        getData();
    }, []);
return (
    <div className="weather">
        <div className="nhap">
            <input
                type="text"
                placeholder="Enter your city"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key == "Enter" && text) {
                        getData();
                        setText("");
                    }
                }}
            />
        </div>
        <div className="hienthi">
            {data && (
                <>
                    <h1 className="city">
                        {data.name} , {data.sys.country}
                    </h1>
                    <h1 className="nhietdo">{data.main.temp} °C</h1>
                    <h1 className="troi">
                        {data.weather[0].description}{" "}
                        <br></br>
                        <img
                            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                        />
                    </h1>
                </>
            )}
        </div>
    </div>
);
}

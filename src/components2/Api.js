import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
export default function Api() {
    const [data, setData] = useState(null);
    const getData = async () => {
        const url = `https://645640845f9a4f23613ec4e8.mockapi.io/list`;

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useState(() => {
        getData();
    }, []);
    return (
        <div>
            {data &&
                data.map((item, index) => {
                    return (
                        <h1 key={index}>
                            {item.name},{item.old}
                        </h1>
                    );
                })}
        </div>
    );
}

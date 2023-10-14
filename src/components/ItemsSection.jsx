import { useEffect, useState } from "react";
import Card from "./Card";

const ItemsSection = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            let response = await fetch("https://fakestoreapi.com/products");
            response = await response.json();
            setItems(response);
            console.log(response);
        })();
    }, [])

    return (
        <div className='max-w-[1440px] w-11/12 mx-auto my-7'>
            <div className="flex flex-col items-center gap-7">
                {items.length !== 0 && items.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ItemsSection
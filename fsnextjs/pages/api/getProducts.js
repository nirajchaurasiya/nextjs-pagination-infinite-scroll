import axios from "axios";

export default async function handler(req, res) {
    const URI = 'https://dummyjson.com/products?limit=0'
    try {
        axios.get(URI)
            .then((data) => {
                console.log(data)
                const products = data.data;
                res.status(200).json({ products: products })
            })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

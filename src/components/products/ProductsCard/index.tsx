import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";

export default function ProductsCard(props: {product:IProduct}) {
    const product = props.product
    return (
        <Link href={`/products/${product.id}`}>
            <div className="grid grid-cols-4 m-5 shadow">
                <div className="col-span-1">
                    <img src="https://media.istockphoto.com/id/1300601995/pt/foto/traditional-brazilian-brigadeiro-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=I3EuJsB5dBD_AYtEyzpmICBdKq-L4gsEWHU_INVHLIM="></img>
                </div>
                <div className="col-span-3 flex flex-col p-2">
                    <span className="font-lg font-bold">{product.name}</span>
                    <span className="font-lg text-pink-500">R$ {product.price}</span>
                </div>
            </div>
        </Link>
        
    )
}
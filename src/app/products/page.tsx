'use client'

import { IProduct } from "@/interfaces/product.interface"
import { useEffect, useState } from "react"
import { getProducts } from "./api"
import Link from "next/link"
import ProductsCard from "@/components/products/ProductsCard"

export default function Products(){
    const [products, setProducts] = useState<IProduct[]>([])
    
    async function listProducts() {
        const products = await getProducts()
        setProducts(products)
    }

    useEffect(() => {
        listProducts()
    }, [])

    return(
        <div>
            <h1>Produtos</h1>
            <Link 
                href={'products/create'}
                className="bg-pink-400 p-2 rounded-sm text-white"
            >
                Cadastrar novo produto
            </Link>
            <div className="flex flex-wrap justify-around">
                {
                    products.map((product) => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}
'use client'

import { INewProduct, IProduct } from "@/interfaces/product.interface"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { postProduct } from "../api"

type ProductForm = {
    name: string
    price: number
}

export default function CreateProduct() {
    const [products, setProducts] = useState<INewProduct[]>([])
    const {register, handleSubmit} = useForm<ProductForm>()

    function onSubmit(data: ProductForm) {
        const newProduct: INewProduct = {...data, price: Number(data.price)}
        const listNewProducts = [...products, newProduct]
        setProducts(listNewProducts)
        postProduct(newProduct)
    }

    //const onSubmit: SubmitHandler<ProductForm> = (data) => {}

    return (
        <div className="grid lg:grid-cols-2 gap-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('name', {required:true})}
                    type="text" 
                    placeholder="Nome do produto" 
                />
                <input 
                    {...register('price', {required:true})}
                    step={0.01}
                    type="number" 
                    placeholder="Preço" 
                />
                <button type="submit">Cadastrar</button>
            </form>
            <div>
                <b>Lista de Novos Produtos</b>
                {
                    products.map((product, key) => (
                        <p key={key}>{product.name} - {product.price}</p>
                    ))
                }
            </div>
        </div>
    )
}
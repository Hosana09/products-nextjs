import { getProductById } from "../api"

export default async function ProductView({ params, }: { params: Promise<{id: string}>}) {
    
    const {id} = await params
    const product = await getProductById(id)
    
    return (
        <div>
            {product?.name} - {product?.price}
        </div>
    )
}
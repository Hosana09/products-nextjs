import { INewProduct, IProduct } from "@/interfaces/product.interface"

const apiUrl = 'http://localhost:3000/products'

export async function getProducts(): Promise<IProduct[]> {
    const response = await fetch(apiUrl)
    const json = await response.json()

    return json
}

export async function getProductById(id:string): Promise<IProduct | null> {
    const response = await fetch(apiUrl+'/'+id)
    
    if (response.status != 200) return null
    
    const json = await response.json()

    return json
}

export async function postProduct(data:INewProduct) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (response.status == 201) {
        alert('Produto cadastrado com sucesso!')
    }
}
import { INewUser, IUser } from "@/interfaces/user.interface"

const apiUrl = 'http://localhost:3000/users'

export async function getUsers():Promise<IUser[]> {
    const response = await fetch(apiUrl)
    const json = await response.json()
    return json
}

export async function postUser(data: INewUser) {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (response.status == 201) {
        alert('Usuário cadastrado com sucesso!')
    }
}
import { IUser } from "@/interfaces/user.interface"

export default async function getUsers():Promise<IUser[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    return json
}

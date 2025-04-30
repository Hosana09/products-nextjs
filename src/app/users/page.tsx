'use client'

import { useEffect, useState } from "react";
import { INewUser, IUser } from "@/interfaces/user.interface";
import { useForm } from "react-hook-form";
import { getUsers, postUser } from "./api";

export default function Users() {
    
  const [users, setUsers] = useState<IUser[]>([])
  const {register, handleSubmit} = useForm<INewUser>()

  async function getAllUsers() {
    const users = await getUsers()
    setUsers(users)
  }

  useEffect(() => { getAllUsers() }, [])

  async function onSubmit(data: INewUser) {
    const user = await postUser(data)
    getAllUsers()
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder="Nome" {...register('name')} />
          <input type="text" placeholder="E-mail" {...register('email')} />
          <input type="password" placeholder="Senha" {...register('password')} />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.id} - {user.name} | {user.email}</li>
        ))}
      </ul>
    </div>
  );
}
import { createContext } from 'react'
import type { FC, ReactNode } from 'react'

interface UseProviderType {
    children: ReactNode
}

export const TodosContext = createContext<string[]>([])

export const TodosProvider = (Props: UseProviderType) => {
    const todos: string[] = []

    return (
   <TodosContext.provider value={todos}>
   {
    children
   }
   </TodosContext.provider>
  )
}

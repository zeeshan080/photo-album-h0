import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='p-3 shadow-md bg-slate-50'>
       <div className='flex justify-between items-center'>
       <div>
          ZeeAlbum
        </div>

        <div><Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar></div>
       </div>
    </header>
  )
}
'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {}

export default function EditImage({}: Props) {
    
    const search =  useSearchParams();
    const publicId = search.get("publicId")
    return (
    <div>{publicId}</div>
  )
}
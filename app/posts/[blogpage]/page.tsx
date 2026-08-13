import Bp from '@/app/_components/bp'
import Header from '@/app/_components/header'
import Spinsmile from '@/app/_components/spinsmile'
import React from 'react'

export default async function PostPage({ params }: { params: Promise<{ blogpage: string }> }) {
  return (
    <>
    <Header />
    <Bp params={params} />
    <Spinsmile />
    </>
  )
}

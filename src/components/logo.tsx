'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'

export default function Logo() {
  // resolvedTheme is 'light' | 'dark' on the client
  const { resolvedTheme } = useTheme()
  const src =
    resolvedTheme === 'dark'
      ? '/TextRetriever_White.png'
      : '/TextRetriever_Black.png'

  return (
    <>
      <Image src={src} width={40} height={40} alt="TextRetriever logo" />
      <b style={{ marginLeft: 8 }}>TextRetriever</b>
    </>
  )
}

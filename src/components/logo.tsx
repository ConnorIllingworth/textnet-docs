// app/src/components/Logo.tsx
'use client'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
// const url = process.env.APP_URL;
// const url = process.env.NEXT_PUBLIC_APP_URL;

export default function Logo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // after first paint, we know SSR is done
  useEffect(() => {
    setMounted(true)
  }, [])

  // before mount, always show the "light" (black) logo
  if (!mounted) {
    return (
      <>
        <Image
          src="/TextRetriever_Black.png"
          width={40}
          height={40}
          alt="TextRetriever logo"
        />
        <b style={{ marginLeft: 8 }}>TextRetriever</b>
      </>
    )
  }

  // once mounted, switch normally
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


// 'use client'

// import { useTheme } from 'next-themes'
// import Image from 'next/image'

// export default function Logo() {
//   // resolvedTheme is 'light' | 'dark' on the client
//   const { resolvedTheme } = useTheme()
//   const src =
//     resolvedTheme === 'dark'
//       ? '/TextRetriever_White.png'
//       : '/TextRetriever_Black.png'

//   return (
//     <>
//       <Image src={src} width={40} height={40} alt="TextRetriever logo" />
//       <b style={{ marginLeft: 8 }}>TextRetriever</b>
//     </>
//   )
// }

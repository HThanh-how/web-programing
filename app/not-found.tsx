'use client' // Error components must be Client Components
 
import { Box, Image } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])



  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 10 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 10000);

    return () => clearTimeout(timeout); // Cleanup the timer on component unmount
  }, []);
 
  return (
    <><title>404 Not found</title>
    <Box justifyContent={"center"} w="95vw">
    <Image justifyContent={"center"} src='/404.png' maxH ={"60vh"} style={{ margin: "auto" }}></Image></Box></>
  )
}
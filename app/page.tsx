"use client"
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState("")
  const [streaming, setStreaming] = useState("")
  const [loading, setLoading] = useState(false)
  const [streamResponse, setStreamResponse] = useState("")

  const handleChat = async() =>{
    setLoading(true)
    setResponse("")

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Contest-Type": "application/json"
        },
        body: JSON.stringify({message})
      })

      const data = await res.json()
      setResponse(data.response)
    } catch (error:any) {
      setResponse("Error" + error.message)
    }
    setLoading(false)
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-9xl">
      <h1>Get started with AI</h1>
    </div>
  );
}

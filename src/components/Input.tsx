"use client"

import { useRouter } from "next/navigation"
import React from "react"
import { useState } from "react"
import SearchBar from "@/components/SearchBar"
import { codes } from "@/lib/data"

interface FormState {
  inputText: string
  inputZIP: string
}

export default function Input() {
  const router = useRouter()
  const [formState, setFormState] = useState<FormState>({
    inputText: "",
    inputZIP: "",
  })
  const [zip, setZip] = useState(codes[0])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await fetch("/api/help", {
      method: "POST",
      body: JSON.stringify({
        inputText: formState.inputText,
        inputZIP: zip,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
    console.log(res)
    router.push("/map")
  }

  return (
    <form onSubmit={handleSubmit} className="bg-blue gap-4 m-10">
      <div className="flex flex-col w-auto gap-4">
        <label htmlFor="inputText">I need help with:</label>
        <textarea
          // type="text"
          id="inputText"
          name="inputText"
          value={formState.inputText}
          onChange={handleInputChange}
          className="rounded-md text-black h-[200px]"
          maxLength={300}
        />
        <label htmlFor="inputZIP">ZIP code:</label>
        <SearchBar selected={zip} setSelected={setZip} />
        {/* <input
          type="number"
          id="inputZIP"
          name="inputZIP"
          value={formState.inputZIP}
          onChange={(e) => handleInputChange(e)}
          className="rounded-md h-10 text-black"
        /> */}
        <button type="submit" className="rounded-md border-2 border-white p-3">
          Submit
        </button>
      </div>
    </form>
  )
}

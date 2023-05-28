import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export async function POST(req: NextRequest) {
  const data = await req.json()
  const newHelp = await prisma.help.create({
    data: {
      text: data.inputText,
      postCode: data.inputZIP,
    },
  })
  return NextResponse.json({ help: newHelp })
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const zip = url.searchParams.get("zip")
  if (!zip) {
    const helps = await prisma.help.findMany()
    console.log(helps)
    return NextResponse.json({ helps })
  }
  const helps = await prisma.help.findMany({
    where: {
      postCode: zip,
    },
  })
  console.log(helps)
  return NextResponse.json({ helps })
}

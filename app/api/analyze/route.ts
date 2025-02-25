import { analyzeSite } from "@/lib/gemini"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "URL é obrigatória" }, { status: 400 })
    }

    // Validate URL format
    if (!/^https?:\/\/.+\.[a-z]{2,}(\/.*)?$/i.test(url) && !/^.+\.[a-z]{2,}(\/.*)?$/i.test(url)) {
      return NextResponse.json({ error: "URL inválida" }, { status: 400 });
    }

    const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
    const analysis = await analyzeSite(formattedUrl)

    return NextResponse.json({ analysis })
  } catch (error) {
    console.error("Error in analyze route:", error)
    return NextResponse.json({ error: "Erro ao analisar o site" }, { status: 500 })
  }
}

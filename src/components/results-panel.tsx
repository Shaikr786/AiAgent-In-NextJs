"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clipboard, ThumbsUp, ThumbsDown } from "lucide-react"

interface Result {
  id: string
  content: string
  timestamp: string
}

export function ResultsPanel() {
  const [results, setResults] = useState<Result[]>([])

  useEffect(() => {
    // Fetch results when component mounts
    fetchResults()
  }, [])

  async function fetchResults() {
    try {
      const response = await fetch("/api/results")
      if (!response.ok) throw new Error("Failed to fetch results")
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error(error)
    }
  }

  if (results.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        No results yet. Try asking a question!
      </div>
    )
  }

  return (
    <ScrollArea className="h-screen">
      <div className="space-y-8 p-6">
        {results.map((result) => (
          <div key={result.id} className="space-y-4">
            <div className="prose prose-neutral dark:prose-invert">{result.content}</div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Clipboard className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <ThumbsDown className="h-4 w-4" />
                <span className="sr-only">Dislike</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}


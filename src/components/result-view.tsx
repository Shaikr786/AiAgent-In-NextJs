import { Button } from "@/components/ui/button"
import { Clipboard, ThumbsUp, ThumbsDown, RefreshCw } from "lucide-react"

interface ResultViewProps {
  content: string
}

export function ResultView({ content }: ResultViewProps) {
  return (
    <div className="rounded-xl border bg-background p-6">
      <div className="prose prose-neutral dark:prose-invert">{content}</div>
      <div className="mt-4 flex items-center gap-2">
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
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <RefreshCw className="h-4 w-4" />
          <span className="sr-only">Regenerate</span>
        </Button>
      </div>
    </div>
  )
}


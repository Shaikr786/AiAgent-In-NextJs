import { Button } from "@/components/ui/button"
import { Copy, ImportIcon as FileImport, LayoutDashboard, UserPlus, Calculator } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: Copy,
      label: "Clone a Screenshot",
    },
    {
      icon: FileImport,
      label: "Import from Figma",
    },
    {
      icon: LayoutDashboard,
      label: "Landing Page",
    },
    {
      icon: UserPlus,
      label: "Sign Up Form",
    },
    {
      icon: Calculator,
      label: "Calculate Factorial",
    },
  ]

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {actions.map((action) => (
        <Button key={action.label} variant="outline" className="h-9 gap-2 rounded-full text-sm text-muted-foreground">
          <action.icon className="h-4 w-4" />
          {action.label}
        </Button>
      ))}
    </div>
  )
}


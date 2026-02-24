import { Sparkles } from "lucide-react"

function Logo() {
  return (
    <div className="flex items-center gap-2">
        <div className="bg-[#f8961e] p-2 rounded-xl text-white shadow-lg shadow-orange-200">
          <Sparkles size={24} fill="currentColor" />
        </div>
        <span className="text-2xl font-bold tracking-tight">Remind</span>
      </div>
  )
}

export default Logo
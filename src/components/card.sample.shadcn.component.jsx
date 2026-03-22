import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**color-palette-showcase version 1.00 - CardSampleShadcn -
 * Features:
 * 
 *      --> Building 'CardSampleShadcn'       
 * 
 * Notes: This provider will be migrated later with the 
 * rest of the providers
 */

const CardSampleShadcn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-4">
      <div className="max-w-md w-full space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-white">¡Shadcn está vivo! 🚀</h1>
        <p className="text-zinc-400">
          Si puedes ver este botón con estilos, significa que tu alias <code className="text-zinc-200">@</code> y Tailwind v4 están funcionando perfectamente.
        </p>
        
        <div className="flex gap-3">
          {/* Usando el componente de Shadcn directamente */}
          <Button variant="default">Botón Estándar</Button>
          
          {/* Probando la función 'cn' para añadir estilos extra */}
          <Button 
            className={cn(
              "bg-emerald-600 hover:bg-emerald-700 text-white",
              "shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            )}
          >
            Botón Custom con cn()
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardSampleShadcn;
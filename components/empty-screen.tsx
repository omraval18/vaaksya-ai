
import { IconAI } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg p-8">
        <div className="w-full flex justify-center">
          <div className="max-w-36 invert brightness-0 contrast-[100] opacity-50">
            <IconAI />
          </div>
        </div>
      </div>
    </div>
  )
}

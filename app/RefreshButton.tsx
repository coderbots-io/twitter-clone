'use client'

import { useTransition } from 'react'
import { refreshFeed } from './actions'

export default function RefreshButton() {
  const [pending, startTransition] = useTransition()

  return (
    <div className="flex justify-center border-b border-neutral-800 py-2">
      <button
        type="button"
        disabled={pending}
        onClick={() => startTransition(() => refreshFeed())}
        className="rounded-full border border-neutral-700 px-5 py-1.5 text-sm font-semibold transition hover:bg-neutral-900 disabled:opacity-50"
      >
        {pending ? 'Refreshing…' : 'Refresh'}
      </button>
    </div>
  )
}

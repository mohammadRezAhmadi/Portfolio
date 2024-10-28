import React from 'react'

export default function Ping() {
  return (
    <div>
       <span class="relative flex w-2 h-2 inline-flex mr-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
    </div>
  )
}

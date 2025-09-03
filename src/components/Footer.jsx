import { ArrowUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy;{new Date().getFullYear()} Wassim Gueddari , All Rights Reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors sm:ml-0 ml-0"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}
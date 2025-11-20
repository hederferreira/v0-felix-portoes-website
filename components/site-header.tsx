"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="bg-secondary text-secondary-foreground p-1.5 rounded-md">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Félix Portões</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#home" className="text-white/90 hover:text-secondary transition-colors">
            Início
          </Link>
          <Link href="#sobre" className="text-white/90 hover:text-secondary transition-colors">
            Sobre
          </Link>
          <Link href="#servicos" className="text-white/90 hover:text-secondary transition-colors">
            Serviços
          </Link>
          <Link href="#projetos" className="text-white/90 hover:text-secondary transition-colors">
            Projetos
          </Link>
          <Link href="#dicas" className="text-white/90 hover:text-secondary transition-colors">
            Dicas
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contato" className="hidden md:block">
            <Button variant="secondary" className="font-semibold">
              Solicite um Orçamento
            </Button>
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="#home" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">
                  Início
                </Link>
                <Link href="#sobre" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">
                  Sobre
                </Link>
                <Link
                  href="#servicos"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  Serviços
                </Link>
                <Link
                  href="#projetos"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  Projetos
                </Link>
                <Link href="#dicas" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-primary">
                  Dicas
                </Link>
                <Link href="#contato" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Solicite um Orçamento</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

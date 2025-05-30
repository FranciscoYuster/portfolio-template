"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useLanguage } from "@/contexts/language-context"
import { LanguageToggle } from "./language-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 dark:bg-gray-900/80 dark:border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold dark:text-white">
          <Link href="/">{t("nav.portfolio")}</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-4">
            <li>
              <a
                href="#sobre-mi"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a
                href="#curriculum"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#curriculum")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.resume")}
              </a>
            </li>
            <li>
              <a
                href="#certificaciones"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#certificaciones")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.certifications")}
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.projects")}
              </a>
            </li>
           {/*  <li>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("nav.contact")}
              </a>
            </li> */}
          </ul>
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button and Controls */}
        <div className="flex items-center md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="ml-2" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#sobre-mi"
                  className="block py-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a
                  href="#curriculum"
                  className="block py-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#curriculum")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  {t("nav.resume")}
                </a>
              </li>
              <li>
                <a
                  href="#certificaciones"
                  className="block py-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#certificaciones")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  {t("nav.certifications")}
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="block py-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#proyectos")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  {t("nav.projects")}
                </a>
              </li>
         {/*      <li>
                <a
                  href="#contacto"
                  className="block py-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
                    toggleMenu()
                  }}
                >
                  {t("nav.contact")}
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import { Linkedin, Github, Code, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function SobreMi() {
  const { t, getData } = useLanguage()
  const personalData = getData('personal')

  return (
    <section id="sobre-mi" className="py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold dark:text-white">{t("nav.about")}</h2>
          <div className="mx-auto h-1 w-20 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-8 md:grid-cols-2">
        <AnimateOnScroll animation="fade-right" delay={200}>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
              <Image src="/placeholder.svg" alt="profile-image" fill className="object-cover" priority />
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-left" delay={400}>
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <h3 className="mb-4 text-2xl font-semibold dark:text-white">
                {t("about.greeting")} <span className="text-gray-800 dark:text-gray-200">{personalData.name}</span>
              </h3>

              <div className="mb-4 flex items-start space-x-3">
                <Code className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-600 dark:text-gray-300">{personalData.description[0]}</p>
              </div>

              <div className="mb-4 flex items-start space-x-3">
                <Package className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <p className="text-gray-600 dark:text-gray-300">{personalData.description[1]}</p>
              </div>

              <div className="mb-6 flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                >
                  <path d="M4 10h16c.5 0 1 .5 1 1v1c0 .5-.5 1-1 1H4c-.5 0-1-.5-1-1v-1c0-.5.5-1 1-1z" />
                  <circle cx="7" cy="15" r="2" />
                  <circle cx="17" cy="15" r="2" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300">{personalData.description[2]}</p>
              </div>              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  asChild
                >
                  <a
                    href={personalData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                  asChild
                >
                  <a 
                    href={personalData.social.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

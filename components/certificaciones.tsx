"use client"

import { Award, Calendar, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Certificaciones() {
  const { t, getData } = useLanguage()
  const certificaciones = getData('certifications')

  // Ordenar certificaciones por fecha
  const certificacionesOrdenadas = [...certificaciones.items].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <section id="certificaciones" className="py-8 sm:py-16 bg-gray-50 dark:bg-gray-900">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-8 sm:mb-12 text-center px-4">
          <h2 className="mb-2 text-2xl sm:text-3xl font-bold dark:text-white">{t("certifications.title")}</h2>
          <div className="mx-auto h-1 w-20 bg-gray-300 dark:bg-gray-700"></div>          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("certifications.subtitle")}
          </p>
        </div>
      </AnimateOnScroll>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificacionesOrdenadas.map((certificacion, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={200 + index * 100}>
              <Card className="h-full overflow-hidden dark:bg-gray-800 dark:border-gray-700 rounded-xl">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg dark:text-white break-words whitespace-normal">
                        {certificacion.platform}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 break-words whitespace-normal">
                        {t(`certifications.category.${certificacion.category}`)}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg sm:text-xl font-medium mb-4 dark:text-white break-words whitespace-normal">
                    {certificacion.title}
                  </h4>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="whitespace-nowrap">
                        {t("certifications.issued")}: {certificacion.date}
                      </span>
                    </div>
                    {certificacion.expiration && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="whitespace-nowrap">
                          {t("certifications.expires")}: {certificacion.expiration}
                        </span>
                      </div>
                    )}
                  </div>

                  {certificacion.credentialUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 w-full dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 group"
                      asChild
                    >
                      <a
                        href={certificacion.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <span>{t("certifications.credential")}</span>
                        <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

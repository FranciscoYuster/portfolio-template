"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { useLanguage } from "@/contexts/language-context"

export default function Proyectos() {
  const { t, getData } = useLanguage()
  const projects = getData("projects").items

  // Extraer todos los tipos únicos para los filtros
  const allTypes = [...new Set(projects.map((project) => project.type))]

  // Estado para los filtros
  const [selectedType, setSelectedType] = useState<string | null>(null)

  // Filtrar proyectos según los filtros seleccionados
  const filteredProjects = projects.filter((project) => {
    if (!selectedType) return true
    return project.type === selectedType
  })

  // Manejar cambios en los filtros
  const handleTypeFilter = (type: string) => {
    setSelectedType(selectedType === type ? null : type)
  }

  // Limpiar todos los filtros
  const clearFilters = () => {
    setSelectedType(null)
  }

  return (
    <section id="proyectos" className="py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold dark:text-white">{t("projects.title")}</h2>
          <div className="mx-auto h-1 w-20 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </AnimateOnScroll>

      {/* Filtros */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
          <div className="flex items-center mb-4">
            <Filter className="mr-2 h-5 w-5 text-gray-600 dark:text-gray-400" />
            <h3 className="text-lg font-medium dark:text-white">{t("projects.filter")}</h3>
            {selectedType && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="ml-auto text-sm dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {t("projects.clearFilters")}
              </Button>
            )}
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2 dark:text-gray-300">{t("projects.byType")}</h4>
            <div className="flex flex-wrap gap-2">
              {allTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleTypeFilter(type)}
                  className={`text-xs ${selectedType !== type && "dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"}`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Proyectos filtrados */}
      <div className="container mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">{t("projects.noResults")}</p>
            <Button
              variant="outline"
              className="mt-4 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={clearFilters}
            >
              {t("projects.clearFilters")}
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={200 + index * 100}>
                <Card className="overflow-hidden h-full dark:bg-gray-800 dark:border-gray-700">
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gray-800 dark:bg-gray-700 text-white px-3 py-1 z-10 text-xs font-medium rounded-bl-md">
                      {project.type}
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col h-[calc(100%-12rem)]">
                    <h3 className="mb-2 text-xl font-semibold dark:text-white">{project.title}</h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <ExternalLink className="mr-1 h-4 w-4" />
                          {t("projects.demo")}
                        </a>
                      </Button>

                      {project.codeUrl ? (
                        <Button
                          variant="outline"
                          size="sm"
                          className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                          asChild
                        >
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="mr-1 h-4 w-4" />
                            {t("projects.code")}
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="cursor-not-allowed dark:border-gray-700 dark:text-gray-400"
                        >
                          🔒 {t("projects.private")}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

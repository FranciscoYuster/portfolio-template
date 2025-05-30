"use client"

import { Calendar, GraduationCap, Briefcase, Code, Database, BarChart, PenToolIcon as Tool } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export default function Curriculum() {
  const { t, getData } = useLanguage()
  
  const education = getData('education').items
  const experience = getData('experience').items
  const skills = getData('skills')

  return (
    <section id="curriculum" className="py-16">
      <AnimateOnScroll animation="fade-up">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold dark:text-white">{t("resume.title")}</h2>
          <div className="mx-auto h-1 w-20 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-12 md:grid-cols-2 mb-16">
        {/* Educación */}
        <div>
          <AnimateOnScroll animation="fade-right" delay={200}>
            <h3 className="mb-6 flex items-center text-xl font-semibold dark:text-white">
              <GraduationCap className="mr-2 h-5 w-5" />
              {t("resume.education")}
            </h3>
          </AnimateOnScroll>
          <div className="relative">
            {/* Línea de tiempo vertical */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <AnimateOnScroll key={index} animation="fade-right" delay={300 + index * 100}>
                  <div className="relative pl-10">
                    {/* Círculo en la línea de tiempo */}
                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <div className="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                    </div>

                    <Card className="overflow-hidden border-l-4 border-l-gray-300 dark:border-l-gray-700 dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-4">
                        <h4 className="font-semibold dark:text-white">{item.degree}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</p>
                        <div className="my-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-3 w-3" />
                          {item.period}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <AnimateOnScroll animation="fade-left" delay={200}>
            <h3 className="mb-6 flex items-center text-xl font-semibold dark:text-white">
              <Briefcase className="mr-2 h-5 w-5" />
              {t("resume.experience")}
            </h3>
          </AnimateOnScroll>
          <div className="relative">
            {/* Línea de tiempo vertical */}
            <div className="absolute left-3 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <AnimateOnScroll key={index} animation="fade-left" delay={300 + index * 100}>
                  <div className="relative pl-10">
                    {/* Círculo en la línea de tiempo */}
                    <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <div className="h-2 w-2 rounded-full bg-gray-500 dark:bg-gray-400"></div>
                    </div>

                    <Card className="overflow-hidden border-l-4 border-l-gray-300 dark:border-l-gray-700 dark:bg-gray-800 dark:border-gray-700">
                      <CardContent className="p-4">
                        <h4 className="font-semibold dark:text-white">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.company}</p>
                        <div className="my-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="mr-1 h-3 w-3" />
                          {item.period}
                        </div>
                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          {item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Habilidades */}
      <AnimateOnScroll animation="fade-up" delay={400}>
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-center dark:text-white">{t("resume.skills")}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Lenguajes */}
            <AnimateOnScroll animation="zoom-in" delay={500}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center">
                  <Code className="mr-2 h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <h4 className="text-xl font-semibold dark:text-white">{t("resume.languages")}</h4>
                </div>
                <ul className="space-y-2">
                  {skills.languages.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-6 w-6 mr-2 flex-shrink-0"
                        />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Data Analysis */}
            <AnimateOnScroll animation="zoom-in" delay={600}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center">
                  <BarChart className="mr-2 h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <h4 className="text-xl font-semibold dark:text-white">{t("resume.dataAnalysis")}</h4>
                </div>
                <ul className="space-y-2">
                  {skills.dataAnalysis.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-6 w-6 mr-2 flex-shrink-0"
                        />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Databases */}
            <AnimateOnScroll animation="zoom-in" delay={700}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center">
                  <Database className="mr-2 h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <h4 className="text-xl font-semibold dark:text-white">{t("resume.databases")}</h4>
                </div>
                <ul className="space-y-2">
                  {skills.databases.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-6 w-6 mr-2 flex-shrink-0"
                        />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Tools */}
            <AnimateOnScroll animation="zoom-in" delay={800}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
                <div className="mb-4 flex items-center">
                  <Tool className="mr-2 h-6 w-6 text-gray-700 dark:text-gray-300" />
                  <h4 className="text-xl font-semibold dark:text-white">{t("resume.tools")}</h4>
                </div>
                <ul className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-full rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="h-6 w-6 mr-2 flex-shrink-0"
                        />
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  )
}

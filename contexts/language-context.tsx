"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { Language, LocalizedData } from "@/types/data"

// Importar traducciones
import translations from "@/data/translations.json"

// Importar los archivos JSON en español
import personalEs from "@/data/es/personal.json"
import educationEs from "@/data/es/education.json"
import experienceEs from "@/data/es/experience.json"
import certificationsEs from "@/data/es/certifications.json"
import projectsEs from "@/data/es/projects.json"
// Importar los archivos JSON en inglés
import personalEn from "@/data/en/personal.json"
import educationEn from "@/data/en/education.json"
import experienceEn from "@/data/en/experience.json"
import certificationsEn from "@/data/en/certifications.json"
import projectsEn from "@/data/en/projects.json"

// Importar skills común
import skills from "@/data/skills.json"

// Define the localized data structure based on the JSON files' structure
const localizedData: LocalizedData = {
  personal: {
    es: personalEs,
    en: personalEn
  },
  education: {
    es: educationEs,
    en: educationEn
  },
  experience: {
    es: experienceEs,
    en: experienceEn
  },
  certifications: {
    es: certificationsEs,
    en: certificationsEn
  },
  projects: {
    es: projectsEs,
    en: projectsEn  },
  skills: {
    es: skills,
    en: skills
  }
} as const

type TranslationSections = keyof typeof translations.es 
type TranslationKey = `${TranslationSections}.${string}`

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
  getData: <T extends keyof LocalizedData>(section: T) => LocalizedData[T][Language]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("portfolio-language") as Language | null
      if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
        setLanguage(savedLanguage)
      } else {
        const browserLanguage = navigator.language.toLowerCase()
        if (browserLanguage.startsWith("en")) {
          setLanguage("en")
        }
      }
    } catch (error) {
      console.warn("Error accessing localStorage:", error)
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("portfolio-language", language)
    } catch (error) {
      console.warn("Error saving to localStorage:", error)
    }
  }, [language])

  const t = (key: TranslationKey): string => {
    try {
      const [section, ...parts] = key.split(".")
      const path = parts.join(".")
      let translation = translations[language][section as keyof typeof translations.es]

      for (const part of parts) {
        if (translation && typeof translation === "object" && part in translation) {
          translation = translation[part as keyof typeof translation]
        } else {
          console.warn(`Translation missing for key: ${key} in language: ${language}`)
          return key
        }
      }

      if (typeof translation !== "string") {
        console.warn(`Translation is not a string for key: ${key} in language: ${language}`)
        return key
      }

      return translation
    } catch (error) {
      console.warn(`Error getting translation for key: ${key}`, error)
      return key
    }
  }

  const getData = <T extends keyof LocalizedData>(section: T): LocalizedData[T][Language] => {
    return localizedData[section][language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getData }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

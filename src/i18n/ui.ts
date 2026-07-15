export const languages = {
  es: 'Español',
  en: 'English',
}

export const defaultLang = 'es'

export const ui = {
  es: {
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.resume': 'Resumen',
    'nav.toggleMenu': 'Alternar menú',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos',
    'section.about': 'Sobre mí',
    'project.view': 'Ver proyecto',
    'project.code': 'Código',
    'home.greeting': 'Hola, mi nombre es',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.thirdparty': 'Este sitio utiliza recursos de terceros como íconos e ilustraciones con licencia abierta.',
    'site.title': 'Franco Pérez — Full Stack Developer & Tech Lead',
  },
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.toggleMenu': 'Toggle menu',
    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.about': 'About me',
    'project.view': 'View project',
    'project.code': 'Code',
    'home.greeting': 'Hi, my name is',
    'footer.rights': 'All rights reserved.',
    'footer.thirdparty': 'This site uses third-party resources such as icons and illustrations under open licenses.',
    'site.title': 'Franco Pérez — Full Stack Developer & Tech Lead',
  },
} as const

export type Lang = keyof typeof ui
export type UiKey = keyof (typeof ui)[typeof defaultLang]

export function useTranslations(lang: Lang) {
  return function t(key: UiKey) {
    return ui[lang][key] ?? ui[defaultLang][key]
  }
}

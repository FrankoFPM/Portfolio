export const languages = {
  es: 'Español',
  en: 'English',
}

export const defaultLang = 'es'

export const ui = {
  es: {
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    'nav.resume': 'Resumen',
    'nav.toggleMenu': 'Alternar menú',
    'section.experience': 'Experiencia',
    'section.projects': 'Proyectos',
    'section.stack': 'Stack',
    'section.about': 'Sobre mí',
    'section.contact': 'Contacto',
    'project.view': 'Ver proyecto',
    'project.code': 'Código',
    'home.greeting': 'Hola, mi nombre es',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.cloud': 'Cloud & DevOps',
    'skills.data': 'Datos & IA',
    'contact.text': 'Abierto a roles full-time y proyectos freelance. Si tienes algo en mente, escríbeme.',
    'contact.email': 'Escribir un correo',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.thirdparty': 'Este sitio utiliza recursos de terceros como íconos e ilustraciones con licencia abierta.',
    'site.title': 'Franco Pérez — Full Stack Developer & Tech Lead',
  },
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',
    'nav.toggleMenu': 'Toggle menu',
    'section.experience': 'Experience',
    'section.projects': 'Projects',
    'section.stack': 'Stack',
    'section.about': 'About me',
    'section.contact': 'Contact',
    'project.view': 'View project',
    'project.code': 'Code',
    'home.greeting': 'Hi, my name is',
    'skills.backend': 'Backend',
    'skills.frontend': 'Frontend',
    'skills.cloud': 'Cloud & DevOps',
    'skills.data': 'Data & AI',
    'contact.text': 'Open to full-time roles and freelance work. If you have something in mind, get in touch.',
    'contact.email': 'Send an email',
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

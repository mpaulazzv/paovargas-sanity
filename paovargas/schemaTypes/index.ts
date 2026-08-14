// Documentos
import post from './post'
import author from './author'
import category from './category'
import service from './service'
import homePage from './homePage'
import servicesPage from './servicesPage'
import blogPage from './blogPage'
import aboutPage from './aboutPage'
import methodPage from './methodPage'
import siteSettings from './siteSettings'

// Contenido enriquecido
import blockContent from './blockContent'

// Objetos reutilizables
import highlightedTitle from './objects/highlightedTitle'
import link from './objects/link'
import methodStep from './objects/methodStep'
import seo from './objects/seo'
import socialLink from './objects/socialLink'
import faqItem from './objects/faqItem'

export const schemaTypes = [
  // Páginas (singleton)
  homePage,
  servicesPage,
  blogPage,
  aboutPage,
  methodPage,
  siteSettings,

  // Colecciones
  post,
  author,
  category,
  service,

  // Contenido enriquecido
  blockContent,

  // Objetos reutilizables
  highlightedTitle,
  link,
  methodStep,
  seo,
  socialLink,
  faqItem,
]

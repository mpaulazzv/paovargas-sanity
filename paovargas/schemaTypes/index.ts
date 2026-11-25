// Documentos
import post from './post'
import author from './author'
import category from './category'
import service from './service'
import homePage from './homePage'
import servicesPage from './servicesPage'
import corporatePage from './corporatePage'
import blogPage from './blogPage'
import aboutPage from './aboutPage'
import methodPage from './methodPage'
import quizPage from './quizPage'
import siteSettings from './siteSettings'

// Contenido enriquecido
import blockContent from './blockContent'

// Objetos reutilizables
import highlightedTitle from './objects/highlightedTitle'
import link from './objects/link'
import methodStep from './objects/methodStep'
import camino from './objects/camino'
import seo from './objects/seo'
import socialLink from './objects/socialLink'
import faqItem from './objects/faqItem'
import formacionItem from './objects/formacionItem'
import corporateService from './objects/corporateService'
import corporateWhyItem from './objects/corporateWhyItem'

export const schemaTypes = [
  // Páginas (singleton)
  homePage,
  servicesPage,
  corporatePage,
  blogPage,
  aboutPage,
  methodPage,
  quizPage,
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
  camino,
  seo,
  socialLink,
  faqItem,
  formacionItem,
  corporateService,
  corporateWhyItem,
]

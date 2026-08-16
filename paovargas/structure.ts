import type {StructureResolver} from 'sanity/structure'

export const SINGLETON_TYPES = new Set([
  'homePage',
  'servicesPage',
  'blogPage',
  'aboutPage',
  'methodPage',
  'quizPage',
  'siteSettings',
])

const COLLECTION_TYPES = new Set(['service', 'post', 'category', 'author'])

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Página de inicio')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Página de servicios')
        .id('servicesPage')
        .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
      S.listItem()
        .title('Página de blog')
        .id('blogPage')
        .child(S.document().schemaType('blogPage').documentId('blogPage')),
      S.listItem()
        .title('Página: Sobre mí')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Página: Método')
        .id('methodPage')
        .child(S.document().schemaType('methodPage').documentId('methodPage')),
      S.listItem()
        .title('Quiz de imagen')
        .id('quizPage')
        .child(S.document().schemaType('quizPage').documentId('quizPage')),

      S.divider(),

      S.listItem()
        .title('Servicios')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Servicios')),
      S.listItem()
        .title('Artículos')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Artículos')),
      S.listItem()
        .title('Categorías')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categorías')),
      S.listItem()
        .title('Autores')
        .schemaType('author')
        .child(S.documentTypeList('author').title('Autores')),

      S.divider(),

      S.listItem()
        .title('Configuración del sitio')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      // Cualquier tipo nuevo que se agregue al esquema y no esté listado arriba
      // sigue apareciendo aquí automáticamente.
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return id ? !SINGLETON_TYPES.has(id) && !COLLECTION_TYPES.has(id) : true
      }),
    ])

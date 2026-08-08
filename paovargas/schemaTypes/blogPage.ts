import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons/Documents'

export default defineType({
  name: 'blogPage',
  title: 'Página de blog',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta superior',
      type: 'string',
      initialValue: 'Blog',
    }),
    defineField({
      name: 'heading',
      title: 'Título',
      type: 'string',
      initialValue: 'Ideas para vestir a la mujer que eres hoy.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featuredPost',
      title: 'Artículo destacado',
      description:
        'Artículo que se muestra en grande al inicio de la página. Si se deja vacío, se usa el más reciente',
      type: 'reference',
      to: [{type: 'post'}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página de blog',
      }
    },
  },
})

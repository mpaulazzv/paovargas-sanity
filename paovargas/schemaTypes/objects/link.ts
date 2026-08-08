import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons/Link'

export default defineType({
  name: 'link',
  title: 'Enlace',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      description: 'Ruta interna (ej. /blog) o URL completa',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
})

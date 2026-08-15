import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons/Component'

export default defineType({
  name: 'formacionItem',
  title: 'Credencial de formación',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Texto',
      description: 'Ej. Contadora Pública, Universidad EAFIT',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'text',
      media: 'image',
    },
  },
})

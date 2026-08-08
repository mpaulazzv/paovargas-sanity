import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'highlightedTitle',
  title: 'Título con palabra destacada',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Texto principal',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'highlightedText',
      title: 'Palabra destacada',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

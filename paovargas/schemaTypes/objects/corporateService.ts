import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'corporateService',
  title: 'Servicio corporativo (tarjeta)',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'tag',
      title: 'Etiqueta',
      description: 'Píldora superior de la tarjeta. Ej. Individual, Grupal, Evento, A la medida',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nombre del servicio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Qué incluye',
      description: 'Viñetas de la tarjeta',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tag',
    },
  },
})

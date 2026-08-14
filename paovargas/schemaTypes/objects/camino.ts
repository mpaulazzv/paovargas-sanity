import {defineField, defineType} from 'sanity'
import {ArrowRightIcon} from '@sanity/icons/ArrowRight'

export default defineType({
  name: 'camino',
  title: 'Camino (tarjeta de "Los tres caminos")',
  type: 'object',
  icon: ArrowRightIcon,
  fields: [
    defineField({
      name: 'rango',
      title: 'Rango de precio',
      description: 'Ej. Por tu cuenta · desde USD 35',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'anchor',
      title: 'Ancla',
      description: 'ID del grupo de fichas al que baja el botón, sin # (ej. por-tu-cuenta)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'rango',
      subtitle: 'anchor',
    },
  },
})

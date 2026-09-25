import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'corporateService',
  title: 'Servicio corporativo',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'tag',
      title: 'Etiqueta',
      description: 'Se muestra sobre el nombre, en la tarjeta y en la sección. Ej. Individual, Grupal, Evento',
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
      description: 'Viñetas del servicio',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'image',
      title: 'Imagen del servicio',
      description: 'Vertical 4:5 · 1600 × 2000 px. Se muestra al lado del texto, con animación de entrada.',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Texto alternativo', type: 'string'})],
    }),
    defineField({
      name: 'anchor',
      title: 'Ancla',
      description:
        'ID al que baja la tarjeta de arriba, sin # y sin espacios ni tildes (ej. individual, a-la-medida)',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .regex(/^[a-z0-9-]+$/, {name: 'minúsculas, números y guiones'}),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón',
      type: 'string',
      initialValue: 'Solicitar propuesta',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Enlace del botón',
      description: 'WhatsApp, correo o formulario. Puede llevar un mensaje prellenado.',
      type: 'url',
      validation: (rule) =>
        rule.uri({allowRelative: true, scheme: ['http', 'https', 'mailto']}),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tag',
      media: 'image',
    },
  },
})

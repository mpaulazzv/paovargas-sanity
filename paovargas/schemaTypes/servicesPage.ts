import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'servicesPage',
  title: 'Página de servicios',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {name: 'header', title: 'Encabezado', default: true},
    {name: 'threePaths', title: 'Los tres caminos'},
    {name: 'quizCta', title: '¿No sabes por dónde empezar?'},
    {name: 'faq', title: 'Preguntas frecuentes'},
    {name: 'closing', title: 'Cierre'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'header',
      title: 'Encabezado',
      type: 'object',
      group: 'header',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Servicios',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Empieza por donde estás, no por donde deberías estar.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Párrafo introductorio',
          type: 'text',
          rows: 3,
          initialValue:
            'Cada uno de estos servicios resuelve algo concreto. Ninguno te pide que renueves el clóset, ni que esperes a bajar de peso, ni que contrates el proceso completo para empezar.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Servicios',
      description:
        'Servicios que se muestran en /servicios, agrupados en las fichas según el campo "Camino" de cada servicio',
      type: 'array',
      group: 'header',
      of: [defineArrayMember({type: 'reference', to: [{type: 'service'}]})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'preciosNota',
      title: 'Nota de precios',
      description: 'Se muestra al pie del grupo de fichas',
      type: 'string',
      group: 'header',
      initialValue: 'Los precios están en dólares. El cobro se hace en pesos a la tasa del día.',
    }),
    defineField({
      name: 'threePaths',
      title: 'Los tres caminos',
      type: 'object',
      group: 'threePaths',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Los tres caminos',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Elige según qué necesitas hoy',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'caminos',
          title: 'Caminos',
          description: 'Las tres tarjetas, en orden. Cada ancla debe coincidir con el "Camino" de las fichas',
          type: 'array',
          of: [defineArrayMember({type: 'camino'})],
          validation: (rule) => rule.required().min(3).max(3),
        }),
      ],
    }),
    defineField({
      name: 'quizCta',
      title: '¿No sabes por dónde empezar?',
      type: 'object',
      group: 'quizCta',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: '¿No sabes por dónde empezar?',
        }),
        defineField({
          name: 'body',
          title: 'Descripción',
          type: 'text',
          rows: 2,
          initialValue:
            'Es normal. Ocho preguntas y dos minutos te dicen en qué punto estás y cuál de estos servicios te corresponde.',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del botón',
          type: 'string',
          initialValue: 'Descubre si tu imagen te representa',
        }),
        defineField({
          name: 'ctaHref',
          title: 'Enlace del botón',
          type: 'string',
          initialValue: '/#test-gratuito',
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'Preguntas frecuentes',
      type: 'object',
      group: 'faq',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Antes de decidir',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Preguntas frecuentes',
        }),
        defineField({
          name: 'items',
          title: 'Preguntas',
          type: 'array',
          of: [defineArrayMember({type: 'faqItem'})],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'closing',
      title: 'Cierre de página',
      type: 'object',
      group: 'closing',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Si prefieres preguntarme antes.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          rows: 2,
          initialValue: 'Escríbeme y hablamos. Yo respondo.',
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del botón',
          type: 'string',
          initialValue: 'Hablar por WhatsApp',
        }),
        defineField({
          name: 'ctaHref',
          title: 'Enlace del botón',
          type: 'string',
          initialValue: 'https://wa.me/573108227389',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página de servicios',
      }
    },
  },
})

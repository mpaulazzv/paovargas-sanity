import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'servicesPage',
  title: 'Página de servicios',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {name: 'header', title: 'Encabezado', default: true},
    {name: 'decisionHelper', title: '¿Cuál es para mí?'},
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
          initialValue: 'Un camino, cinco maneras de empezarlo.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Párrafo introductorio',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'closingLine',
          title: 'Frase de cierre',
          description: 'Ej. No tienes que empezar por el más grande. Tienes que empezar.',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'services',
      title: 'Servicios',
      description: 'Servicios que se muestran en esta página, en orden',
      type: 'array',
      group: 'header',
      of: [defineArrayMember({type: 'reference', to: [{type: 'service'}]})],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'decisionHelper',
      title: '¿No sabes por dónde empezar?',
      type: 'object',
      group: 'decisionHelper',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: '¿No sabes por dónde empezar?',
        }),
        defineField({
          name: 'items',
          title: 'Situaciones',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              name: 'decisionItem',
              title: 'Situación',
              fields: [
                defineField({
                  name: 'condition',
                  title: 'Situación de la clienta',
                  description: 'Ej. Si tu problema es el clóset lleno',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'service',
                  title: 'Servicio recomendado',
                  type: 'reference',
                  to: [{type: 'service'}],
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {
                  title: 'condition',
                  subtitle: 'service.name',
                },
              },
            }),
          ],
          validation: (rule) => rule.required().min(1),
        }),
        defineField({
          name: 'closingText',
          title: 'Texto de cierre',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'whatsappCtaLabel',
          title: 'Texto del botón de WhatsApp',
          type: 'string',
          initialValue: 'Escríbeme por WhatsApp',
        }),
        defineField({
          name: 'whatsappUrl',
          title: 'Enlace de WhatsApp',
          type: 'url',
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
          initialValue: 'Todavía no estás lista para invertir. Está bien.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del botón',
          type: 'string',
          initialValue: 'Hacer el test gratis',
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

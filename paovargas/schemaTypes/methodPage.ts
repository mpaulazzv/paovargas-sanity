import {defineArrayMember, defineField, defineType} from 'sanity'
import {SparklesIcon} from '@sanity/icons/Sparkles'

export default defineType({
  name: 'methodPage',
  title: 'Página: Método',
  type: 'document',
  icon: SparklesIcon,
  groups: [
    {name: 'apertura', title: '1 · Apertura (carrusel)', default: true},
    {name: 'porQueExiste', title: '2 · Por qué existe'},
    {name: 'fases', title: '3 · Las tres fases'},
    {name: 'queNoEs', title: '4 · Qué no es'},
    {name: 'cierre', title: '5 · Cierre'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'apertura',
      title: 'Sección 1 · Carrusel + presentación',
      type: 'object',
      group: 'apertura',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Método',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Primero el espejo. Después la ropa.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Texto',
          type: 'text',
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'images',
          title: 'Imágenes del carrusel',
          description: 'Se muestran de a dos en escritorio y de a una en móvil, en orden y en bucle',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'image',
              options: {hotspot: true},
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Texto alternativo',
                  type: 'string',
                }),
              ],
            }),
          ],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'porQueExiste',
      title: 'Sección 2 · Por qué existe este método',
      type: 'object',
      group: 'porQueExiste',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Por qué existe este método',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Tú cambiaste. Tu clóset no se enteró.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'paragraphs',
          title: 'Párrafos',
          type: 'array',
          of: [defineArrayMember({type: 'text', rows: 4})],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'fasesSection',
      title: 'Sección 3 · Las tres fases',
      type: 'object',
      group: 'fases',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Las tres fases',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Reconocer, redefinir, representar',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Frase introductoria',
          type: 'string',
          initialValue: 'No empezamos por la ropa. Empezamos por el espejo.',
        }),
        defineField({
          name: 'sideImage',
          title: 'Imagen lateral',
          type: 'image',
          options: {hotspot: true},
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fases',
          title: 'Las tres fases',
          type: 'array',
          of: [defineArrayMember({type: 'methodStep'})],
          validation: (rule) => rule.required().min(3).max(3),
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del botón',
          type: 'string',
          initialValue: 'Ver dónde empezar',
        }),
        defineField({
          name: 'ctaHref',
          title: 'Enlace del botón',
          type: 'string',
          initialValue: '/servicios',
        }),
      ],
    }),
    defineField({
      name: 'queNoEs',
      title: 'Sección 4 · Qué no es',
      type: 'object',
      group: 'queNoEs',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Qué no es',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Para que no haya sorpresas',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Afirmaciones',
          type: 'array',
          of: [defineArrayMember({type: 'text', rows: 3})],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'cierre',
      title: 'Sección 5 · Cierre',
      type: 'object',
      group: 'cierre',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: '¿En qué fase estás tú?',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Descripción',
          type: 'text',
          rows: 3,
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
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Página: Método',
      }
    },
  },
})

import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export default defineType({
  name: 'aboutPage',
  title: 'Página: Sobre mí',
  type: 'document',
  icon: UserIcon,
  groups: [
    {name: 'hero', title: '1 · Hero', default: true},
    {name: 'historia', title: '2 · Mi historia'},
    {name: 'descubri', title: '3 · Lo que descubrí'},
    {name: 'formacion', title: '4 · Formación'},
    {name: 'creencias', title: '5 · En qué creo'},
    {name: 'comoTrabajar', title: '6 · Cómo es trabajar conmigo'},
    {name: 'cierre', title: '7 · Cierre'},
    {name: 'more', title: 'Secciones adicionales'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Sección 1 · Hero',
      description: 'Hero grande de foto completa, igual al de la página de inicio',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'backgroundImage',
          title: 'Imagen de fondo',
          description: 'Misma imagen que el hero de la página de inicio',
          type: 'image',
          options: {hotspot: true},
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          initialValue: 'Conóceme',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          description: 'Ej. No llegué a la imagen por la moda. Llegué por necesidad.',
          type: 'string',
          initialValue: 'No llegué a la imagen por la moda. Llegué por necesidad.',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'historia',
      title: 'Sección 2 · Mi historia',
      type: 'object',
      group: 'historia',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Mi historia',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Diecisiete años, y después nada',
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
      name: 'descubri',
      title: 'Sección 3 · Lo que descubrí',
      type: 'object',
      group: 'descubri',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Lo que descubrí',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'La ropa no era el problema. Era la señal.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'paragraphs',
          title: 'Párrafos',
          type: 'array',
          of: [defineArrayMember({type: 'text', rows: 4})],
          validation: (rule) => rule.required().min(1),
        }),
        defineField({
          name: 'ctaLabel',
          title: 'Texto del botón',
          type: 'string',
          initialValue: 'Conoce el método',
        }),
        defineField({
          name: 'ctaHref',
          title: 'Enlace del botón',
          type: 'string',
          initialValue: '/metodo',
        }),
      ],
    }),
    defineField({
      name: 'formacion',
      title: 'Sección 4 · Formación',
      type: 'object',
      group: 'formacion',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Formación',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'De dónde viene lo que te digo',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Credenciales',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (rule) => rule.required().min(1),
        }),
        defineField({
          name: 'note',
          title: 'Nota al pie',
          description: 'Ej. La contaduría no se quita: es lo que le permite hablar de cuánto cuesta comprar mal',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'creencias',
      title: 'Sección 5 · En qué creo',
      type: 'object',
      group: 'creencias',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'En qué creo',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Habita quién eres',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Creencias',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'comoTrabajar',
      title: 'Sección 6 · Cómo es trabajar conmigo',
      type: 'object',
      group: 'comoTrabajar',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Cómo trabajo',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Cómo es trabajar conmigo',
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
      title: 'Sección 7 · Cierre',
      type: 'object',
      group: 'cierre',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: '¿Y tú, en qué punto estás?',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Descripción',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'ctaPrimaryLabel',
          title: 'Texto del botón principal',
          type: 'string',
          initialValue: 'Descubre si tu imagen te representa',
        }),
        defineField({
          name: 'ctaPrimaryHref',
          title: 'Enlace del botón principal',
          type: 'string',
          initialValue: '/#test-gratuito',
        }),
        defineField({
          name: 'ctaSecondaryLabel',
          title: 'Texto del botón secundario',
          type: 'string',
          initialValue: 'Ver los servicios',
        }),
        defineField({
          name: 'ctaSecondaryHref',
          title: 'Enlace del botón secundario',
          type: 'string',
          initialValue: '/servicios',
        }),
      ],
    }),
    defineField({
      name: 'extraSections',
      title: 'Secciones adicionales',
      description:
        'Bloques opcionales para ampliar la página más adelante (logos de prensa, historia extra, cierre con imagen). Ninguno de estos se muestra todavía en el sitio.',
      type: 'array',
      group: 'more',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'pressLogos',
          title: 'Logos de prensa',
          fields: [
            defineField({
              name: 'heading',
              title: 'Título',
              description: 'Ej. Como en',
              type: 'string',
            }),
            defineField({
              name: 'logos',
              title: 'Logos',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'image',
                  fields: [defineField({name: 'alt', title: 'Texto alternativo', type: 'string'})],
                }),
              ],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {title: 'heading'},
            prepare({title}) {
              return {title: title || 'Logos de prensa'}
            },
          },
        }),
        defineArrayMember({
          type: 'object',
          name: 'storySection',
          title: 'Bloque de historia',
          fields: [
            defineField({name: 'eyebrow', title: 'Etiqueta superior', type: 'string'}),
            defineField({
              name: 'heading',
              title: 'Título',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'paragraphs',
              title: 'Párrafos',
              type: 'array',
              of: [defineArrayMember({type: 'text', rows: 4})],
              validation: (rule) => rule.required().min(1),
            }),
            defineField({
              name: 'image',
              title: 'Imagen',
              type: 'image',
              options: {hotspot: true},
            }),
            defineField({
              name: 'imagePosition',
              title: 'Posición de la imagen',
              type: 'string',
              options: {
                list: [
                  {title: 'Izquierda', value: 'left'},
                  {title: 'Derecha', value: 'right'},
                ],
                layout: 'radio',
              },
              initialValue: 'right',
            }),
            defineField({name: 'ctaLabel', title: 'Texto del botón (opcional)', type: 'string'}),
            defineField({name: 'ctaHref', title: 'Enlace del botón (opcional)', type: 'string'}),
          ],
          preview: {
            select: {title: 'heading', media: 'image'},
          },
        }),
        defineArrayMember({
          type: 'object',
          name: 'closingCta',
          title: 'Cierre con imagen',
          fields: [
            defineField({
              name: 'heading',
              title: 'Título',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({name: 'description', title: 'Descripción', type: 'text', rows: 3}),
            defineField({name: 'image', title: 'Imagen', type: 'image', options: {hotspot: true}}),
            defineField({
              name: 'ctas',
              title: 'Botones',
              type: 'array',
              of: [defineArrayMember({type: 'link'})],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {title: 'heading', media: 'image'},
          },
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
        title: 'Página: Sobre mí',
      }
    },
  },
})

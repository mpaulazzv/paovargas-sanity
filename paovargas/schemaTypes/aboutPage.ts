import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export default defineType({
  name: 'aboutPage',
  title: 'Página: Sobre mí',
  type: 'document',
  icon: UserIcon,
  groups: [
    {name: 'hero', title: 'Hero (carrusel)', default: true},
    {name: 'vision', title: 'Mi visión'},
    {name: 'more', title: 'Secciones adicionales'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Sección 1 · Carrusel + presentación',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Sobre mí',
        }),
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
        defineField({
          name: 'ctaLabel',
          title: 'Texto del botón',
          type: 'string',
          initialValue: 'Quiero trabajar contigo',
        }),
        defineField({
          name: 'ctaHref',
          title: 'Enlace del botón',
          type: 'string',
          initialValue: '/contacto',
        }),
      ],
    }),
    defineField({
      name: 'visionSection',
      title: 'Sección 2 · Mi visión',
      type: 'object',
      group: 'vision',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Mi visión',
        }),
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
          description: 'Opcional. Aún no se usa en la página, pero queda lista para cuando se agregue',
          type: 'image',
          options: {hotspot: true},
        }),
      ],
    }),
    defineField({
      name: 'extraSections',
      title: 'Secciones adicionales',
      description:
        'Bloques opcionales para ampliar la página más adelante (logos de prensa, historia, cierre con imagen). Ninguno de estos se muestra todavía en el sitio.',
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

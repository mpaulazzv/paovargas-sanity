import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'corporatePage',
  title: 'Página: Servicios corporativos',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {name: 'hero', title: '1 · Hero', default: true},
    {name: 'intro', title: '2 · Por qué invertir'},
    {name: 'services', title: '3 · Servicios'},
    {name: 'why', title: '4 · Por qué trabajar conmigo'},
    {name: 'cta', title: '5 · Cierre'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Sección 1 · Hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Servicios Corporativos · Imagen Profesional',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'La imagen de su equipo comunica los valores de su empresa.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Texto',
          type: 'text',
          rows: 4,
          initialValue:
            'Acompaño a organizaciones que entienden que la forma en que su gente se presenta —ante clientes, medios y públicos— es parte de su reputación. Trabajo la imagen como coherencia entre la persona, su rol y lo que la empresa quiere representar.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'signature',
          title: 'Línea de firma',
          description: 'Línea inferior del hero, separada por una raya. Ej. nombre, cargo y credencial',
          type: 'string',
          initialValue: 'Paola Vargas · Coach de Imagen e Identidad · Presidenta de AICI Colombia',
        }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Sección 2 · Por qué invertir en la imagen del equipo',
      type: 'object',
      group: 'intro',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Por qué invertir en la imagen del equipo',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'La primera impresión de su empresa se construye persona a persona.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Texto',
          type: 'text',
          rows: 6,
          initialValue:
            'Cada colaborador que representa a la organización —en una reunión comercial, una entrevista, un evento o una aparición pública— proyecta un mensaje sobre la marca. Cuando esa imagen es coherente, cuidada y alineada con el rol, transmite criterio, seriedad y confianza. Mi trabajo es lograr que su gente proyecte lo que la empresa vale.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'highlightedText',
          title: 'Fragmento destacado',
          description:
            'Fragmento del texto anterior que se resalta. Debe estar escrito igual dentro del texto para que se vea resaltado.',
          type: 'string',
          initialValue: 'coherente, cuidada y alineada con el rol',
        }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Sección 3 · Servicios para su organización',
      type: 'object',
      group: 'services',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Servicios para su organización',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Cuatro formas de trabajar con su equipo o su personal aliado.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'services',
          title: 'Servicios',
          type: 'array',
          of: [defineArrayMember({type: 'corporateService'})],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'whySection',
      title: 'Sección 4 · Por qué trabajar conmigo',
      type: 'object',
      group: 'why',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
          initialValue: 'Por qué trabajar conmigo',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Formación internacional y experiencia en el mundo corporativo.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Credenciales',
          description: 'Se muestran en una cuadrícula de dos columnas',
          type: 'array',
          of: [defineArrayMember({type: 'corporateWhyItem'})],
          validation: (rule) => rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Sección 5 · Cierre',
      type: 'object',
      group: 'cta',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Conversemos sobre las necesidades de su empresa.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Descripción',
          type: 'text',
          rows: 3,
          initialValue:
            'Cada organización es distinta. Agendemos una reunión breve para entender su objetivo y diseñarle una propuesta a la medida.',
        }),
        defineField({
          name: 'primaryCtaLabel',
          title: 'Texto del botón principal',
          type: 'string',
          initialValue: 'Escríbeme',
        }),
        defineField({
          name: 'primaryCtaHref',
          title: 'Enlace del botón principal',
          type: 'string',
          initialValue: 'mailto:hola@paovargas.com',
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'Texto del botón secundario',
          type: 'string',
          initialValue: 'WhatsApp',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Enlace del botón secundario',
          type: 'string',
          initialValue: 'https://wa.me/573108227389',
        }),
        defineField({
          name: 'contactEmail',
          title: 'Correo de contacto',
          description: 'Se muestra en la línea de contacto al pie de la sección',
          type: 'string',
          initialValue: 'hola@paovargas.com',
        }),
        defineField({
          name: 'contactWebsite',
          title: 'Sitio web',
          description: 'Se muestra junto al correo, como enlace',
          type: 'string',
          initialValue: 'www.paovargas.com',
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
        title: 'Página: Servicios corporativos',
      }
    },
  },
})

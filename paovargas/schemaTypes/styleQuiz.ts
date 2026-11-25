import {defineArrayMember, defineField, defineType} from 'sanity'
import type {ArrayRule} from 'sanity'
import {ColorWheelIcon} from '@sanity/icons/ColorWheel'

// Los 7 estilos del quiz. El `value` es lo que se guarda y lo que el sitio
// usará para contar respuestas; el `title` es lo que se ve en el Studio.
export const STYLES = [
  {title: 'Natural', value: 'natural'},
  {title: 'Tradicional', value: 'tradicional'},
  {title: 'Elegante', value: 'elegante'},
  {title: 'Romántico', value: 'romantico'},
  {title: 'Seductor', value: 'seductor'},
  {title: 'Creativo', value: 'creativo'},
  {title: 'Dramático', value: 'dramatico'},
]

const styleTitle = (value?: string) => STYLES.find((s) => s.value === value)?.title

const styleField = defineField({
  name: 'style',
  title: 'Estilo',
  description: 'Estilo al que suma esta respuesta',
  type: 'string',
  options: {list: STYLES, layout: 'dropdown'},
  validation: (rule) => rule.required(),
})

// Cada pregunta debe tener exactamente una respuesta por estilo (7 en total).
// El orden en que se ingresan aquí no importa: el sitio las mezcla al mostrarlas.
const optionsValidation = (rule: ArrayRule<{style?: string}[]>) =>
  rule
    .required()
    .length(STYLES.length)
    .error(`Cada pregunta debe tener exactamente ${STYLES.length} respuestas`)
    .custom((options) => {
      const used = (options ?? []).map((o) => o.style).filter(Boolean) as string[]
      const repeated = [...new Set(used.filter((s, i) => used.indexOf(s) !== i))]
      if (repeated.length) {
        return `Estilo repetido: ${repeated.map(styleTitle).join(', ')}. Cada estilo debe aparecer una sola vez`
      }
      return true
    })

const questionField = defineField({
  name: 'question',
  title: 'Pregunta',
  type: 'string',
  validation: (rule) => rule.required(),
})

const questionPreview = {
  select: {title: 'question', options: 'options'},
  prepare({title, options}: {title?: string; options?: unknown[]}) {
    return {title, subtitle: `${options?.length ?? 0}/${STYLES.length} respuestas`}
  },
}

// Pantalla breve que presenta cada sección antes de sus preguntas.
function sectionIntroFields() {
  return [
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta superior',
      description: 'Ej. «Parte 1 de 2»',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Texto',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'continueLabel',
      title: 'Texto del botón para continuar',
      type: 'string',
      initialValue: 'Continuar',
    }),
  ]
}

export default defineType({
  name: 'styleQuiz',
  title: 'Quiz de estilo',
  type: 'document',
  icon: ColorWheelIcon,
  groups: [
    {name: 'intro', title: 'Apertura', default: true},
    {name: 'textSection', title: '1 · Respuestas escritas'},
    {name: 'imageSection', title: '2 · Respuestas con imágenes'},
    {name: 'closing', title: 'Cierre'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // Apertura
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta superior',
      description: 'Ej. «Test gratuito · 5 minutos»',
      type: 'string',
      group: 'intro',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'intro',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Texto introductorio',
      type: 'text',
      rows: 3,
      group: 'intro',
    }),
    defineField({
      name: 'startLabel',
      title: 'Texto del botón de inicio',
      type: 'string',
      group: 'intro',
      initialValue: 'Empezar el test',
    }),

    // Sección 1
    defineField({
      name: 'textSectionIntro',
      title: 'Sección 1 · Presentación',
      description: 'Se muestra antes de la primera pregunta. Déjalo vacío para ir directo a las preguntas',
      type: 'object',
      group: 'textSection',
      options: {collapsible: true, collapsed: false},
      fields: sectionIntroFields(),
    }),
    defineField({
      name: 'textQuestions',
      title: 'Sección 1 · Preguntas con respuestas escritas',
      description:
        'Cada pregunta lleva 7 respuestas, una por estilo. Las letras A–G y el orden se asignan al azar en el sitio',
      type: 'array',
      group: 'textSection',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'styleQuizTextQuestion',
          title: 'Pregunta',
          fields: [
            questionField,
            defineField({
              name: 'options',
              title: 'Respuestas',
              type: 'array',
              validation: optionsValidation,
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'styleQuizTextOption',
                  title: 'Respuesta',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Texto de la respuesta',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    styleField,
                  ],
                  preview: {
                    select: {title: 'text', style: 'style'},
                    prepare({title, style}) {
                      return {title, subtitle: styleTitle(style) ?? 'Sin estilo'}
                    },
                  },
                }),
              ],
            }),
          ],
          preview: questionPreview,
        }),
      ],
    }),

    // Sección 2
    defineField({
      name: 'imageSectionIntro',
      title: 'Sección 2 · Presentación',
      description: 'Se muestra al terminar la sección 1, antes de la primera pregunta con imágenes. Déjalo vacío para pasar directo',
      type: 'object',
      group: 'imageSection',
      options: {collapsible: true, collapsed: false},
      fields: sectionIntroFields(),
    }),
    defineField({
      name: 'imageQuestions',
      title: 'Sección 2 · Preguntas con respuestas de imágenes',
      description:
        'Cada pregunta lleva 7 imágenes, una por estilo. Las letras A–G y el orden se asignan al azar en el sitio',
      type: 'array',
      group: 'imageSection',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'styleQuizImageQuestion',
          title: 'Pregunta',
          fields: [
            questionField,
            defineField({
              name: 'options',
              title: 'Respuestas',
              type: 'array',
              options: {layout: 'grid'},
              validation: optionsValidation,
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'styleQuizImageOption',
                  title: 'Respuesta',
                  fields: [
                    defineField({
                      name: 'image',
                      title: 'Imagen',
                      type: 'image',
                      options: {hotspot: true},
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'alt',
                      title: 'Texto alternativo',
                      description: 'Describe la imagen para lectores de pantalla (no menciones el estilo)',
                      type: 'string',
                    }),
                    styleField,
                  ],
                  preview: {
                    select: {media: 'image', style: 'style'},
                    prepare({media, style}) {
                      return {title: styleTitle(style) ?? 'Sin estilo', media}
                    },
                  },
                }),
              ],
            }),
          ],
          preview: questionPreview,
        }),
      ],
    }),

    // Cierre
    defineField({
      name: 'closing',
      title: 'Pantalla final',
      description: 'Lo que ve la persona al responder la última pregunta',
      type: 'object',
      group: 'closing',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Etiqueta superior',
          type: 'string',
        }),
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Texto',
          type: 'text',
          rows: 4,
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
      return {title: 'Quiz de estilo'}
    },
  },
})

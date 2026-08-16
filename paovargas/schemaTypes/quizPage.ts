import {defineArrayMember, defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons/HelpCircle'

export default defineType({
  name: 'quizPage',
  title: 'Quiz de imagen',
  type: 'document',
  icon: HelpCircleIcon,
  groups: [
    {name: 'intro', title: 'Apertura', default: true},
    {name: 'questions', title: 'Preguntas'},
    {name: 'results', title: 'Resultados'},
    {name: 'leadCapture', title: 'Captura de datos'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Etiqueta superior',
      type: 'string',
      group: 'intro',
      initialValue: 'Test gratuito · 2 minutos',
    }),
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'intro',
      initialValue: '¿Tu imagen representa a la mujer que eres hoy?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'intro',
      title: 'Texto introductorio',
      type: 'text',
      rows: 2,
      group: 'intro',
      initialValue: 'Ocho preguntas, dos minutos. Al final recibes tu perfil de imagen.',
    }),
    defineField({
      name: 'startLabel',
      title: 'Texto del botón de inicio',
      type: 'string',
      group: 'intro',
      initialValue: 'Empezar el test',
    }),
    defineField({
      name: 'questions',
      title: 'Preguntas',
      type: 'array',
      group: 'questions',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'quizQuestion',
          fields: [
            defineField({
              name: 'question',
              title: 'Pregunta',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'options',
              title: 'Opciones',
              type: 'array',
              validation: (rule) => rule.required().min(2),
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'quizOption',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Texto de la opción',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'points',
                      title: 'Puntos',
                      type: 'number',
                      validation: (rule) => rule.required().min(1),
                    }),
                  ],
                  preview: {
                    select: {title: 'label', points: 'points'},
                    prepare({title, points}) {
                      return {title, subtitle: points !== undefined ? `${points} pts` : undefined}
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: {title: 'question'},
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'results',
      title: 'Perfiles de resultado',
      description: 'El perfil que se muestra depende de en qué rango cae la suma de puntos de las respuestas',
      type: 'array',
      group: 'results',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'quizResult',
          fields: [
            defineField({
              name: 'label',
              title: 'Nombre del perfil',
              description: 'Ej. «Coherente», «En tránsito»',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'headline',
              title: 'Frase destacada',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'scoreMin',
              title: 'Puntaje mínimo',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'scoreMax',
              title: 'Puntaje máximo',
              type: 'number',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'paragraphs',
              title: 'Párrafos',
              type: 'array',
              of: [defineArrayMember({type: 'text'})],
              validation: (rule) => rule.required().min(1),
            }),
          ],
          preview: {
            select: {title: 'label', min: 'scoreMin', max: 'scoreMax'},
            prepare({title, min, max}) {
              return {title, subtitle: `${min}–${max} pts`}
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'leadCapture',
      title: 'Captura de datos (tras el resultado)',
      description: 'El resultado se muestra primero; este formulario aparece debajo para enviar el diagnóstico completo',
      type: 'object',
      group: 'leadCapture',
      fields: [
        defineField({
          name: 'heading',
          title: 'Título',
          type: 'string',
          initialValue: 'Recibe tu diagnóstico completo',
        }),
        defineField({
          name: 'description',
          title: 'Descripción',
          type: 'text',
          rows: 2,
          initialValue: 'Te enviamos tu mini-diagnóstico en PDF con el primer paso concreto para tu caso.',
        }),
        defineField({
          name: 'submitLabel',
          title: 'Texto del botón de envío',
          type: 'string',
          initialValue: 'Enviarme mi diagnóstico',
        }),
        defineField({
          name: 'privacyNote',
          title: 'Nota de privacidad',
          type: 'text',
          rows: 2,
          initialValue: 'Al enviar aceptas el tratamiento de tus datos personales conforme a la Ley 1581 de 2012.',
        }),
        defineField({
          name: 'privacyLink',
          title: 'Enlace de política de privacidad',
          type: 'string',
          initialValue: 'mailto:paolavargasasesoradeimagen@gmail.com',
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
        title: 'Quiz de imagen',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

export default defineType({
  name: 'service',
  title: 'Servicio',
  type: 'document',
  icon: CaseIcon,
  groups: [
    {name: 'card', title: 'Tarjeta (inicio)', default: true},
    {name: 'detail', title: 'Página de servicios'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Se usa como ancla en la página de servicios (ej. #diagnostico-color-express)',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Etiqueta',
      description: 'Ej. Empieza aquí, Con guía, Premium',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      description: 'Ej. USD 35, 4 sesiones',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      description: 'Orden de aparición (menor primero). Se usa tanto en el carrusel como en la página de servicios',
      type: 'number',
      initialValue: 0,
    }),

    // Tarjeta de inicio (carrusel "Mis servicios")
    defineField({
      name: 'pitch',
      title: 'Frase corta',
      description: 'Texto de la tarjeta en el carrusel de la página de inicio',
      type: 'text',
      rows: 3,
      group: 'card',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cardCtaLabel',
      title: 'Texto del botón (tarjeta)',
      description: 'Ej. Ver cómo funciona, Quiero mi paleta',
      type: 'string',
      group: 'card',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cardCtaHref',
      title: 'Enlace del botón (tarjeta)',
      type: 'string',
      group: 'card',
      initialValue: '/servicios',
    }),

    // Página de servicios (bloque completo)
    defineField({
      name: 'pathGroup',
      title: 'Camino',
      description: 'A cuál de los tres caminos pertenece esta ficha en /servicios',
      type: 'string',
      group: 'detail',
      options: {
        list: [
          {title: 'Por tu cuenta', value: 'por-tu-cuenta'},
          {title: 'Conmigo, puntual', value: 'sesiones-puntuales'},
          {title: 'Conmigo, de principio a fin', value: 'procesos-completos'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modalidad',
      title: 'Modalidad y duración',
      description: 'Ej. Entrega en 48 horas · sin sesión en vivo, o Dos sesiones · virtual',
      type: 'string',
      group: 'detail',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gancho',
      title: 'Frase de apertura',
      description: 'Primera frase del bloque, describe a la clienta antes que al servicio',
      type: 'string',
      group: 'detail',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'parrafos',
      title: 'Párrafos',
      description: 'Para quién es · qué recibe. Cuerpo del texto explicando el servicio',
      type: 'array',
      of: [{type: 'text', rows: 4}],
      group: 'detail',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'nota',
      title: 'Nota bajo el botón',
      description: 'Aclaración opcional (ej. sobre el personal shopper, o cupo limitado)',
      type: 'text',
      rows: 2,
      group: 'detail',
    }),
    defineField({
      name: 'detailCtaLabel',
      title: 'Texto del botón (página de servicios)',
      description: 'Ej. Quiero mis colores, Quiero ordenar mi armario',
      type: 'string',
      group: 'detail',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detailCtaHref',
      title: 'Enlace del botón (página de servicios)',
      type: 'string',
      group: 'detail',
      initialValue: 'https://wa.me/573108227389',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Texto del botón secundario',
      description: 'Ej. Llevarme el Mapa y la Llamada — USD 127',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Enlace del botón secundario',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'disclosureLabel',
      title: 'Enlace desplegable · etiqueta',
      description: 'Ej. ¿Cómo tomo la foto? Se despliega sin salir de la página',
      type: 'string',
      group: 'detail',
    }),
    defineField({
      name: 'disclosureContent',
      title: 'Enlace desplegable · contenido',
      type: 'text',
      rows: 3,
      group: 'detail',
    }),
  ],
  orderings: [
    {
      title: 'Orden',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
  },
})

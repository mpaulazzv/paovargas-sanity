import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export default defineType({
  name: 'post',
  title: 'Artículo',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Contenido', default: true},
    {name: 'meta', title: 'Metadatos'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      description: 'Resumen corto para listados y tarjetas del blog',
      type: 'text',
      rows: 3,
      group: 'content',
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true,
      },
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
      name: 'author',
      title: 'Autor',
      type: 'reference',
      group: 'meta',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      group: 'meta',
      of: [{type: 'reference', to: [{type: 'category'}]}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'meta',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readingTimeMinutes',
      title: 'Tiempo de lectura (minutos)',
      type: 'number',
      group: 'meta',
      validation: (rule) => rule.required().min(1).max(60),
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'blockContent',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Fecha de publicación (más reciente)',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {author, publishedAt} = selection
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('es-CO', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : 'Sin fecha'
      return {
        ...selection,
        subtitle: [author && `por ${author}`, date].filter(Boolean).join(' · '),
      }
    },
  },
})

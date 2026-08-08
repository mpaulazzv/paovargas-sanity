import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título SEO',
      description: 'Reemplaza el título de la página si se proporciona',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descripción SEO',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Imagen para redes sociales',
      description: '1200×630 px recomendado',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'noIndex',
      title: 'Ocultar de buscadores',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})

import {defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons/EarthGlobe'

export default defineType({
  name: 'socialLink',
  title: 'Red social',
  type: 'object',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta',
      description: 'Ej. IG, IN, YT, TT',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
})

import {defineArrayMember, defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

export default defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'brand', title: 'Marca', default: true},
    {name: 'navigation', title: 'Navegación'},
    {name: 'contact', title: 'Contacto'},
    {name: 'footer', title: 'Pie de página'},
  ],
  fields: [
    defineField({
      name: 'brandName',
      title: 'Nombre de marca',
      type: 'string',
      group: 'brand',
      initialValue: 'Paola Vargas',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description: 'Reservado para cuando se reemplace el nombre en texto del header por un logo.',
      type: 'image',
      group: 'brand',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'brand',
      initialValue: 'Coach de Imagen e Identidad',
    }),
    defineField({
      name: 'taglineExtended',
      title: 'Tagline extendido (desktop)',
      type: 'string',
      group: 'brand',
      initialValue: 'Creadora del Método Espejo™',
    }),
    defineField({
      name: 'whatsappCtaLabel',
      title: 'Texto botón WhatsApp',
      type: 'string',
      group: 'contact',
      initialValue: 'Escríbeme por WhatsApp',
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'Enlace WhatsApp',
      type: 'url',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Correo electrónico',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      group: 'contact',
      initialValue: 'Medellín, Colombia',
    }),
    defineField({
      name: 'locationNoteMobile',
      title: 'Nota de ubicación (mobile)',
      type: 'string',
      group: 'contact',
      initialValue: 'Sesiones online',
    }),
    defineField({
      name: 'locationNoteDesktop',
      title: 'Nota de ubicación (desktop)',
      type: 'string',
      group: 'contact',
      initialValue: 'Sesiones online en todo el mundo',
    }),
    defineField({
      name: 'headerNavLinks',
      title: 'Enlaces de navegación (header)',
      type: 'array',
      group: 'navigation',
      of: [defineArrayMember({type: 'link'})],
    }),
    defineField({
      name: 'footerNavLinks',
      title: 'Enlaces de navegación (footer)',
      type: 'array',
      group: 'navigation',
      of: [defineArrayMember({type: 'link'})],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes sociales',
      type: 'array',
      group: 'navigation',
      of: [defineArrayMember({type: 'socialLink'})],
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright',
      type: 'string',
      group: 'footer',
      initialValue: '© 2026 Paola Vargas. Todos los derechos reservados.',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Enlaces legales',
      type: 'array',
      group: 'footer',
      of: [defineArrayMember({type: 'link'})],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Configuración del sitio',
      }
    },
  },
})

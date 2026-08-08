import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure, SINGLETON_TYPES} from './structure'

export default defineConfig({
  name: 'default',
  title: 'paovargas',

  projectId: '81092146',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Las páginas singleton no se pueden crear desde el menú "+" (ya existen,
    // se editan desde la lista de contenido) ni duplicar/eliminar por error.
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((item) => !SINGLETON_TYPES.has(item.templateId))
      }
      return prev
    },
    actions: (prev, {schemaType}) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(({action}) => action && !['unpublish', 'delete', 'duplicate'].includes(action))
        : prev,
  },
})

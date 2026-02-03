// sanity.config.js (або .ts)
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'EngSim Content',

  projectId: 'nvjpqxhm',  // ← Знайдіть в https://sanity.io/manage
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,  // ← ВАЖЛИВО!
  },
})
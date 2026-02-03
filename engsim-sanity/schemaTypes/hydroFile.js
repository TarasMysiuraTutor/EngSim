// schemaTypes/hydroFile.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hydroFile',
  title: 'Hydromechanics Files',  // ← ЦЕ ПОБАЧИТЕ В МЕНЮ!
  type: 'document',
  icon: () => '📁',
  fields: [
    // ID
    defineField({
      name: 'fileId',
      title: 'File ID',
      type: 'slug',
      options: {
        source: 'titleEn',
        maxLength: 96,
      },
    }),
    
    // Назви (окремі поля для кожної мови)
    defineField({
      name: 'titleUk',
      title: 'Title (Ukrainian) 🇺🇦',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'titleRu',
      title: 'Title (Russian) 🇷🇺',
      type: 'string',
    }),
    
    defineField({
      name: 'titleEn',
      title: 'Title (English) 🇬🇧',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    
    defineField({
      name: 'titleDe',
      title: 'Title (German) 🇩🇪',
      type: 'string',
    }),
    
    // Описи
    defineField({
      name: 'descriptionUk',
      title: 'Description (Ukrainian)',
      type: 'text',
      rows: 3,
    }),
    
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    
    // Категорія
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: '📚 General References', value: 'general' },
          { title: '⬇️ Settling', value: 'settling' },
          { title: '🔬 Filtration', value: 'filtration' },
          { title: '🌀 Centrifugation', value: 'centrifugation' },
          { title: '💨 Fluidization', value: 'fluidization' },
          { title: '🔄 Mixing', value: 'mixing' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // Тип файлу
    defineField({
      name: 'fileType',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          { title: '📄 Document', value: 'document' },
          { title: '📊 Diagram', value: 'diagram' },
          { title: '🎥 Video', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // САМ ФАЙЛ - ВАЖЛИВО!
    defineField({
      name: 'file',
      title: 'Upload File 📤',
      type: 'file',
      options: {
        accept: '.pdf,.png,.jpg,.jpeg,.svg',
      },
      description: '⬆️ Upload your PDF, image, or other file here',
    }),
    
    // АБО зовнішнє посилання
    defineField({
      name: 'externalUrl',
      title: 'External URL (Optional) 🔗',
      type: 'url',
      description: 'Use this if file is hosted on GitHub, YouTube, etc.',
    }),
    
    // Мініатюра
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image 🖼️',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    // Метадані
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: ['pdf', 'png', 'jpg', 'svg', 'mp4', 'youtube'],
      },
    }),
    
    defineField({
      name: 'size',
      title: 'File Size',
      type: 'string',
      placeholder: 'e.g., 18.5 MB',
    }),
    
    defineField({
      name: 'pages',
      title: 'Number of Pages',
      type: 'number',
    }),
    
    defineField({
      name: 'year',
      title: 'Publication Year',
      type: 'number',
    }),
    
    defineField({
      name: 'edition',
      title: 'Edition',
      type: 'string',
      placeholder: 'e.g., 9th Edition',
    }),
    
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: '🇺🇦 Ukrainian', value: 'uk' },
          { title: '🇷🇺 Russian', value: 'ru' },
          { title: '🇬🇧 English', value: 'en' },
          { title: '🇩🇪 German', value: 'de' },
        ],
      },
    }),
    
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    
    defineField({
      name: 'featured',
      title: 'Featured? ⭐',
      type: 'boolean',
      description: 'Show in featured section on the website',
      initialValue: false,
    }),
  ],
  
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'category',
      media: 'thumbnail',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: title || 'Untitled',
        subtitle: subtitle ? `📂 ${subtitle}` : 'No category',
        media: media,
      }
    },
  },
})
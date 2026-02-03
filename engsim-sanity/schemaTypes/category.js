export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'categoryId',
      title: 'Category ID',
      type: 'slug',
      options: {
        source: 'name.en',
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        { name: 'uk', title: 'Ukrainian', type: 'string' },
        { name: 'ru', title: 'Russian', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'de', title: 'German', type: 'string' },
      ],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Emoji or icon name',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
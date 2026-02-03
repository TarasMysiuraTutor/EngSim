import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Імпортуйте ваші схеми
import hydroFile from './hydroFile'
import category from './category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    hydroFile,
    category,
  ]),
})
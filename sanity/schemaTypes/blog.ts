import { defineField, defineType } from "sanity";

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "title",
      }
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
        validation: (Rule) =>
          Rule.required().min(3).max(30).error('Category must be between 3 and 30 characters'),
      }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pitch',
      title: 'Pitch',
      type: 'markdown',
    }),
  ]
});


// npm install next-sanity@canary 
// npm install sanity-plugin-markdown
export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name: 'image1',
            title: 'Image1',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image1AssocText',
            title: 'Image 1 associated text',
            type: 'string',
        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image2AssocText',
            title: 'Image 2 associated text',
            type: 'string',
        },

    ],
  };
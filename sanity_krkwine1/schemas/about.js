export default {
    name: 'about',
    title: 'About / Contact Information',
    type: 'document',
    fields: [
        {
            name: 'aboutHeader',
            title: 'Company About Header',
            type: 'string', 
        },
        {
            name: 'about',
            title: 'Company About',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'contactCardIntro',
            title: 'Contat Card Introduction',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            name: 'contactCardImage',
            title: 'Contact Card Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'contactCardName',
            title: 'Contact Card Name',
            type: 'string',
        },
        {
            name: 'contactCardNumber',
            title: 'Contact Card Number',
            type: 'string',
        },
        {
            name: 'contactCardEmail',
            title: 'Contact Card Email',
            type: 'string',
        },
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
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        },

    ],
};
import image from './assets/bg.jpg';
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks';
import {css} from './utils';

const text = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis fuga maxime molestiae, porro possimus? 
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis fuga maxime molestiae, porro possimus?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. A debitis fuga maxime molestiae, porro possimus?
`;

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0077, darkred)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
    }),
    new ImageBlock(image, {
        styles: css({
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        }),
        alt: 'img',
        imageStyles: css({
            width: '500px',
            height: 'auto',
            'border-radius': '15px'
        })
    }),
    new TextBlock(text, {
        styles: css({
            background: 'linear-gradient(to right, #ff0cc7, #ff789b)',
            color: '#f4f4f4',
            padding: '2rem'
        })
    }),
    new TextColumnsBlock([
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'A debitis fuga maxime molestiae, porro possimus?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'A debitis fuga maxime molestiae, porro possimus?'
    ], {
        styles: css({
            padding: '1.8rem 0',
            color: '#fff',
            background: 'linear-gradient(to bottom, #8eee8e, #4aae78)',
            'font-weight': 'bold'
        })
    }),
    /* {
         type: 'title',
         value: 'Конструктор сайтов на чистом JavaScript!',
         options: {
             tag: 'h2',
             styles: 'background: linear-gradient(to right, #ff0077, darkred);color: #fff;padding:1.5rem;text-align: center;'
         }
     },
     {
         type: 'image',
         value: image,
         options: {
             styles: 'padding: 2rem 0;display: flex;justify-content: center;',
             alt: 'img',
             imageStyles: 'width: 500px; height: auto;border-radius: 15px;'
         }

     },
     {
         type: 'text',
         value: text,
         options: {
             styles: 'background: linear-gradient(to right, #ff0cc7, #ff789b); color: #f4f4f4;padding: 2rem;'
         }
     },
     {
         type: 'textColumns',
         value: [
             'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
             'A debitis fuga maxime molestiae, porro possimus?',
             'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
             'A debitis fuga maxime molestiae, porro possimus?'
         ],
         options: {
             styles: 'padding: 1.8rem 0;color: #fff;background: linear-gradient(to bottom, #8eee8e, #4aae78);font-weight: bold;'
         }
     }*/

];

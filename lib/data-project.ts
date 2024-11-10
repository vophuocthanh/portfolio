import { monkeyBloging, travelGolobe, ucademy, zoomClone } from '@/public';

export const listProjectMe = [
  {
    id: 1,
    name: 'Monkey Blogging',
    description: `This blog is used to share stories in life, connect people
            together with technology #ReactJs, #Firebase, #Tailwind css, #SCSS,
            #API, #Axios`,
    date: 'Dec 20, 2022 - Mar 18, 2023',
    image: monkeyBloging,
    path: 'monkey-blogging',
  },
  {
    id: 2,
    name: 'Travel Golobe',
    description:
      'Building a tourism and travel service system using AI technology to recommend tours with  technology #Reactjs #Typescript #ShadcnUI #Tanstack Query #Nestjs #PostgreSQL',
    date: 'Aug 20, 2024 - Dec 29, 2024',
    image: travelGolobe,
    path: 'pet-project',
  },
  {
    id: 3,
    name: 'Zoom Clone',
    description:
      'Zoom clone is a web application or built to provide similar online gaming and display features as Zoom with technology #Nextjs #Getiostream #Tailwindcss #Clerk #ShadcnUI',
    date: 'Mar 10, 2024 - Apr 26, 2023',
    image: zoomClone,
    path: 'zoom-clone',
  },
  {
    id: 4,
    name: 'Ucademy',
    description:
      'Built interfaces for course creation, categorization, and listing, allowing administratorss with technology #Nextjs #MongoDB #Webhook #Tinymce #Clerk',
    date: 'May 10, 2024 - Present',
    image: ucademy,
    path: 'ucademy-app',
  },
];

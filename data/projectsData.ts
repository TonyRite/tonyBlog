interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Food Ordering App front End',
    description: `I am developing an online food ordering web application inspired by Just Eat. This project utilizes modern frontend development techniques with React and TypeScript. I have deployed it on Render and used Shadcn for the UI components. The site is still under development, as is common with many personal hobby projects.`,
    imgSrc: '/static/images/tonyEatsFrontEnd.png',
    href: 'https://tonyeatsfrontend.onrender.com/',
  },
  {
    title: 'TonyEats backend plartform',
    description: `The backend of my online food ordering web application is built with modern technologies. It uses MongoDB for the database, TypeScript with Node.js and Express for the server, and OAuth for authentication. This setup ensures a robust, scalable, and secure backend architecture.`,
    imgSrc: '/static/images/tonyeatsBackend.png',
    href: 'https://tonyeatsbackend.onrender.com/health',
  },
]

export default projectsData

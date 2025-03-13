interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tixert',
    description: `What if you could access all your event tickets and details in one place? Tickets, event information, and more. Tixert offers powerful features to help you manage and discover events effortlessly.`,
    imgSrc: '/static/images/tixert.png',
    href: 'https://www.tixert.com',
  },
  {
    title: '3D Portfolio Website',
    description: `What if you could explore a stunning 3D portfolio built with cutting-edge technology? Projects, visuals, and interactive experiences all in one place. Hyden showcases my work with Next.js, Three.js, and TypeScript.`,
    imgSrc: '/static/images/3d-world.png',
    href: 'https://hyden.vercel.app/',
  },
]

export default projectsData

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Lexer',
    description: 'Build a lexical analyzer for the c programming language',
    imgSrc: '/static/images/lexer.png',
    href: 'https://github.com/simon-kurbiel/lexical-analysis',
  },
  {
    title: 'JWT',
    description: 'A complete authentication written in javascript using JWT',
    imgSrc: '/static/images/auth.jpg',
    href: 'https://github.com/simon-kurbiel/jwt-authentication',
  },
  {
    title: 'dating app backend',
    description:
      'an ongoing project to write a backend for a dating app using python, aws, docker, mysql including other technologies',
    imgSrc: '/static/images/dating.jpeg',
    href: 'https://github.com/simon-kurbiel/dating',
  },
]

export default projectsData

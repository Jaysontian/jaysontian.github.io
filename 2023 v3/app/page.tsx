
import Galaxy from '@/components/galaxy'
import Project from '@/components/project'


// Home page

const sampleProjects = [
  {title: "Skilldeck.me", desc: "An all-in-one CRM tool for freelance designers"},
  {title: "Matcha", desc: "Learning how to update stuff here"},
  {title: "Cosmos", desc: "Learning how to update stuff here"},
]

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center antialiased font-medium md:gap-10">
        <div className='flex flex-col gap-10 md:gap-10 md:mt-12'>
          <div className='my-8'></div>
          <p>Jayson Tian</p>
          <p>Software & interface engineer, entrepreneur, artist, barista, and brain-science geek. I particularly enjoy exploring the intersection between software, interface design, and human behaviour. I'm currently studying Computer Science at UCLA.</p>
          <p>Email / LinkedIn / Github</p>
        </div>

        <div className='flex flex-col gap-20 mt-60'>
          <h2>My Projects</h2>
          {sampleProjects.map((project)=>(
            <Project name={project.title} desc={project.desc} />
          ))}
        </div>
        <div className="mb-60"></div>
      </main>
      <Galaxy />
    </>
  )
}

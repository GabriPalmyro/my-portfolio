import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Minhas Habilidades</h5>
      <h2>Minha Experiência</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvimento Frontend & Cloud</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Flutter</h4>
                <small className='text-light'>Expert</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>React</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Next.js</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>AWS - RDS</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>AWS - EC2</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>AWS - S3</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Desenvolvimento Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>Nest.js</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Firebase</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>MySQL</h4>
                <small className='text-light'>Avançado</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>PHP</h4>
                <small className='text-light'>Intermediário</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Laravel</h4>
                <small className='text-light'>Intermediário</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediário</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Experience
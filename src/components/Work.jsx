import React from 'react'
import './WorkCard.css'
import ProjectCardData from './ProjectData'
import WorkCard from './WorkCard'

function Work() {
  console.log('ProjectCardData in Work:', ProjectCardData);

  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {
          ProjectCardData.map((val,index)=>{
           return(
            <WorkCard key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}/>
           )
          })
        }
      </div>
    </div>
  )
}

export default Work
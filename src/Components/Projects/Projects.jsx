import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FullStackProjects from '../FullStackProjects/FullStackProjects';
import FrontendProjects from '../FrontendProjects/FrontendProjects';
import ShortLearningProjects from '../ShortLearningProjects/ShortLearningProjects';
const Projects = () => {
  return (
    <>
     <section className='project-section px-[120px] mb-10'>
        
             <h1 className='text-white text-2xl mb-3 '>Projects</h1>
            <div className="projects">
            <Tabs  >
    <TabList className="text-[#777] py-4">
      <Tab>Full Stack Projects</Tab>
      <Tab>Frontend Projects</Tab>
      <Tab>Short Learning Projects</Tab>
    </TabList>

    <TabPanel>
      <FullStackProjects/>
    </TabPanel>
    <TabPanel >
     <FrontendProjects/>
    </TabPanel>
    <TabPanel >
      <ShortLearningProjects/>
    </TabPanel>
  </Tabs>
            </div>
     </section>
    </>
    
  )
}

export default Projects
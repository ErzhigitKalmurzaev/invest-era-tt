import React from 'react'
import Container from '../components/shared/container'
import { Link } from 'react-router-dom'

const MainPage = () => {

  return (
    <Container className='py-10'>
        <h1 className='text-3xl font-bold'>Портфели</h1>

        <div className='flex flex-col gap-4 py-4'>
            <Link to="model-portfolio-usa" className='text-[#036F35] underline'>Компании США</Link>
            <Link to="online-table-chn" className='text-[#036F35] underline'>Таблица компаний с потенциалом</Link>
        </div>
    </Container>
  )
}

export default MainPage

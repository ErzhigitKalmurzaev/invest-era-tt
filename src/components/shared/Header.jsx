import React from 'react'
import Container from './container';

import Logo from '../../assets/icons/invest_era.svg'
import NavButton from './nav-button';
import { Button } from '../ui/button';

const navLinks = [
  {
    title: 'Новости',
    link: 'news'
  },
  {
    title: 'Аналитика',
    link: 'analitics'
  },
  {
    title: 'Обучение',
    link: 'education'
  },
  {
    title: 'О компании',
    link: 'aboutus'
  },
  {
    title: 'Портфели',
    link: 'portfelios'
  },
]

const Header = () => {

  return (
    <div className='w-full h-[70px] bg-basic flex items-center'>
      <Container className={'w-full flex justify-between'}>
        <div className='flex items-center'>
          <img src={Logo} />
        </div>

        <div className='flex items-center w-[75%]'>
          {
            navLinks.map((item, index) => (
              <NavButton key={index} title={item.title} link={item.link} active={index === 4} />
            ))
          }
        </div>

        <Button variant='outline' size='lg'>
          Авторизация
        </Button>

      </Container>
    </div>
  )
}

export default Header

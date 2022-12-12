import React from 'react'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Contact from '../doctor/contact/Contact';
import Doctor from '../doctor/Doctor';
import Item from '../Item/Item';
import Count from '../side/count/Count';

import Side from '../side/Side';
import Title from '../Title/Title';

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Card></Card>
        <Item></Item>
        <Title></Title>
        <Side></Side>
        <Doctor></Doctor>
        <Contact></Contact>
        
    </div>
  )
}

export default Home;
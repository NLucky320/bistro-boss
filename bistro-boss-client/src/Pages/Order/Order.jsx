import React, { useState } from 'react';
import oderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    
    const [menu] = useMenu();
    const { category } = useParams();
    const categories=['salads', 'pizza', 'soup', 'Desserts', 'drinks']
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const desserts=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    
    return (
        <div className='mb-12'>
               <Helmet>
          <title>Bistro Boss | Order </title>
        </Helmet>
            <Cover img={oderCover} title={'Order Food'} text={'Would you like to try a dish?'}></Cover>
            <div className='pt-8'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>salads</Tab>
    <Tab>pizza</Tab>
    <Tab>soup</Tab>
    <Tab>Desserts</Tab>
    <Tab>drinks</Tab>
  </TabList>
                    <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                
  <TabPanel>  <OrderTab items={pizza}></OrderTab></TabPanel>
  <TabPanel>  <OrderTab items={soup}></OrderTab></TabPanel>
  <TabPanel>  <OrderTab items={desserts}></OrderTab></TabPanel>
  <TabPanel>  <OrderTab items={drinks}></OrderTab></TabPanel>
</Tabs>
</div>

        </div>
    );
};

export default Order;
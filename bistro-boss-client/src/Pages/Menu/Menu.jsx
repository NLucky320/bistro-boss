import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import MenuCategory from './Menucategory/MenuCategory';
const Menu = ({img, title, text}) => {
    const [menu, loading] = useMenu();
const desserts=menu.filter(item=>item.category==='dessert')
const soup=menu.filter(item=>item.category==='soup')
const salad=menu.filter(item=>item.category==='salad')
const pizza=menu.filter(item=>item.category==='pizza')
const offered=menu.filter(item=>item.category==='offered')

    return (
        <div className='mb-12'>
            <Helmet>
       <title>         Bistro Boss | Menu</title>
            </Helmet>
    <Cover img={menuImg} title={'Our Menu'} text={'Would you like to try a dish?'}></Cover>

            <SectionTitle subHeading={'Do not miss'} heading={"TODAY'S OFFER"}> 

            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title={'Desserts'} coverImg={desertImg} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} ></MenuCategory>
          
            <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaImg} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} ></MenuCategory>
            <MenuCategory items={salad} title={'salads'} coverImg={saladImg} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} ></MenuCategory>
              <MenuCategory items={soup} title={'soup'} coverImg={soupImg} text={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'} ></MenuCategory>
         
        </div>

    );
};

export default Menu;
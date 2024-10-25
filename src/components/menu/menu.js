import React, { useState } from 'react'
import './menu.css'
import LikeIcon from '../../icons/like';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RestaurantIcon from '@mui/icons-material/Restaurant';

function Menu() {
    const [items ,setItems] = useState([
        {
            id: 1,
            name: 'Mixed Tropical Fruit Salad with Superfood Boosts',
            img: 'https://s3-alpha-sig.figma.com/img/f699/5460/a4292927efc17ee09591649f7a1b7364?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D~R73zXJ5bbwWeZla3vo03DkUxkk9nkdxxYa4DUGBoT2F5HnVG2frG91Bz7iiJeIiYCR5SwKjB-g3jwZ7iQISokLnpQXkd6lJBqtbRyd~A9b9R5-7PZrMtO1zemFvnoWDrmmN7JunECHohg0CQaUwYkN1wDVLJ~3MVSkBXz9BzW9h3tLdZggG38tbF6t-A9d62u~5H6DFBed6Th0zf25u9HofaAzREy81OaXIJ2L19T~HVvHuZbmfh~YwGqK9alVzjl039b0nPOCQoMFWK1hb~9j2AIu91DAAzwTmSvz7P8Cd2LDEJKdU19hGpmcdEnMGBsShI5Id9OL0TTopBYHHA__',
            category: {
                time: ' 10 minutes',
                food: ' Healthy'
            },
            isLike: false
        },
         {
            id: 2,
            name: 'Big and Juicy Wagyu Beef Cheeseburger',
            img: 'https://s3-alpha-sig.figma.com/img/8513/aab8/ce4a091fb4a7a972e7f0ba7d653cedf2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=am9waLWrzbM4RY1L-VAVkyqLFARL45DrEkn1QpTwJOyKOS1wrUAyYddmIKdhVo94ihJqhx6sdRJZBjgBlmBsgjB9fNAET55KRO-r8ibNgoV9lBqleXRsKv~RbK2dnMTaXyAFXUFVjHgrhfZlOLog2DzksMPfnAivaoEdLc2ohckhTa8qChJ8wzQBXYKB5yc6eOISMcVPcilw5wVVLFNETFn~IuC-AO4xQwxJJVjEVxTNmg55TodDHQ1-nllatM3-KqZSqcSpoMZ8FwBBlnHQ6wZdr88q2CP0KKvQVoLdclBKuxr-ntVA561SFY8uF33M93MMxSyKMaQ0si9YFOmMeg__',
            category: {
                time: ' 10 minutes',
                food: ' Westren'
            },
            isLike: false
        },
         {
            id: 3,
            name: 'Healthy Japanese Fried Rice with Asparagus',
            img: 'https://s3-alpha-sig.figma.com/img/91b8/8940/14c8464b47399978beaef54c6ab1a1ce?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDr0CElffbMFlG7cJHvhNgC~J6lvwApco-D-wO8i0ewtbAv6sxHKQQj4b12cwzRIgMaW4-zpXy9WRZtpx1oWJiLct7znG6XKogTjMT3nTnRtKf9g6HLg1LKpeHxDOK-yLCH2pybRHuJzQU9uv0AwpF6dT1zNg8IYjjH03lvUsOAuiEnRBNaFOxnYN6Y5RHrim~6hvc1k6QoV0rm14eQdPT8g0dfVqkb0FNP5S-mZ~92ce~hm8rIVjm6O~JsGw266oVzwV9S2p17x7RwBwj3T1UM13AWPnV1nl1vjEcLJHhpfTiH1V33gukSHbU~at-pAgiyoyw72qPo8sYB3fXc6oQ__',
            category: {
                time: ' 10 minutes',
                food: ' Healthy'
            },
            isLike: false
        },
         {
            id: 4,
            name: 'Cauliflower Walnut Vegetarian Taco Meat',
            img: 'https://s3-alpha-sig.figma.com/img/9bf6/c3de/19b579cff4368a1bfcba9e2f306d4c99?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgrL9pw80kSqX6SYa0jYYn-ckzGqipSkGDnaprpF1APN5OePwU8liDRJ1X~y3ZiBBH0NTKJVW2BlGEFME825ozthQI6w5ZgHP3Upjcci58rGz1-mRcogsqcZ13eJA8sNvJyqpDsiOh0W2xLi1Ynn6Xio8hLK9VYjqXA7oZ6Cr0J2NWcenolTqfjI396zvjL3pNeMfIwPMWcSwLwQFgEG2wWw8KolRZXOPoauuNzXKFL1z0HG3ENEewWu31sB~uEJ7t2fgNdn3RREzUzWE6F59U-r28ulzf0dgbJIzNOpRk-ziMRwaQSs-ko02ddxl~IWxOzblNGR6zmnnya9N8vigQ__',
            category: {
                time: ' 10 minutes',
                food: ' Eastren'
            },
            isLike: false
        },
    ])
  return (
    <div className='menu_box'>
        <div className='menu_title'>You may like these recipe too</div>

       <div className='items_menu'>
            {items.map((item)=>{
                return(
                    <div className='menu_item' key={item.id}>
                        <div className='floating_menu_icon'>
                            <LikeIcon />
                        </div>
                        <div className='menu_img'>
                            <img src={item.img}/>
                        </div>
                        <div className='menu_item_title'>{item.name}</div>
                        <div className='menu_item_icon_box'>
                           <div className='menu_item_icon'><AccessTimeFilledIcon /><div className='p'>{item.category.time}</div></div>
                           <div className='menu_item_icon'><RestaurantIcon /><div className='p'>{item.category.food}</div></div>
                        </div>
                    </div>
                    )
            })}
       </div>
    </div>
  )
}

export default Menu;
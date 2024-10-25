import React from 'react'
import './listmenu.css'
import { useState } from 'react';
import LikeIcon from '../../icons/like';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RestaurantIcon from '@mui/icons-material/Restaurant';
function ListMenu() {
        const [items ,setItems] = useState([
         {
            id: 1,
            name: 'Big and Juicy Wagyu Beef Cheeseburger',
            img: 'https://s3-alpha-sig.figma.com/img/5d7d/b88e/5ef423a8f20961cea9360410d3cf9b06?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkTSCg9ZUs9WVa7MTQpp9yhTV7oFy06-6gA2kiF2an8TQOKjHJ-KmKO5XvUfpoiqCVM9jwghORZ32Qfk1QI09ysciARiX8Yao6RfNcwpEOJCdwAlSoNjCyquUI5S-o7xFT0FI6sgKIqB1boWYTOv~4Gtw1kzFVJhH9bSkM0lF-SELsJFTvmKjyoRaVsxVto~5DTtNebEs7ecQEkFipPfyoH2TNSobeF2X-c3GSkvLrDJHLezSXopl8GQBM~2PxE9w2Oa5K0SuhEJapxqWyYsHMbUOH-~8DrcRWuEOD1B17sS-mk-Lp5QvqUGRd7~jWAaQ0gCl3jcgwuhvy95O8Zojw__',
            category: {
                time: ' 10 minutes',
                food: ' Snack',
            },
            isLike: false
        },
         {
            id: 2,
            name: 'Fresh Lime Roasted Salmon with Ginger Sauce',
            img: 'https://s3-alpha-sig.figma.com/img/d86c/1749/6ee5d71fd0448e26a89ff68c5a944d8b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pp0IjmimmnDJu0WvDSDt62p2jNPgLb3UG8RqBiGC8~phOiJcT5jERbP-GICeEfXUnIt5S2AwJEEzLV8VxmTjC3jt0ChlsC3XKfrrSLapJS~slOl9vzVq2T4yX08vPLl6eZ6HO6MSJt5fHZTLSh9FIVjPfrX8Xi3~Lj-nAN96hoDuEtZt1VuqeLYeUSsyroO7AV9~1lSIjIk3FRFzCR6bmQMQSAbiE3UngZOlp7lqhvmKQLNTPeiLpgo1ZyVM-Alda-zGeFAbbDCBLh3NFHVi5BgZ6fK-dPzbHbU2TxUdKW9vFTFanmdTr10vbeaxbhOOTCbfvSD-97kpZQV8nAbZ2Q__',
            category: {
                time: ' 10 minutes',
                food: ' Fish',
            },
            isLike: false
        },
         {
            id: 3,
            name: 'Strawberry Oatmeal Pancake with Honey Syrup',
            img: 'https://s3-alpha-sig.figma.com/img/7fe0/9451/d0ff70cd5cb9ed533406b0c0767483eb?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkFlD6MNdS4RE0L0~VwMKwG5l~MCryiUPNq8prhTX4bhW2UtDQE9p4zJiCG6jX5FvGNJFGVFCGNpcCwu5NK4DP3d9XEomkw3t4z1BhiGvrAd3Lu~cAqf8UP7jhWo2XKo7pnApb7Z8d15OVNwHnSktq-EL2fXu7K3pLzaTYHzRzCH~6dAsZYUMgLUgRAxJ4N-14qFwixZyZaLsgDE2T0JpMlpKZJArPUTb-NPD2rQJno4-iUu~TezECCXwTHv~FxNuCMsTtOy-c12GpD8wbJv-4tWJSNBByncZY9I3iExAT5zjdOgMmRbqx6y1F77f0FfGJQwmm8Z1xIS3YR6G12JKw__',
            category: {
                time: ' 10 minutes',
                food: '  Breakfast',
            },
            isLike: false
        },
         {
            id: 4,
            name: 'Fresh and Healthy Mixed Mayonnaise Salad',
            img:'https://s3-alpha-sig.figma.com/img/d1f6/530d/2e13ca360d563e2dd86ae9d7363cf835?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ReXaVrzGIP9rhXVUh~tkXs3Ycb6cmlk-BIP3CJqEpa-zcpMjW9VZJrXucYZp7LP6uVVZCEELUXIxjN9UU3Rz29r8lzKBoeYt~oHbV4k78lvLL~YschwbqZFlwRx7wcXp53rZOrtAjeYjaVAtOOSSIl~r6CSsSHSdxQU6M1RirQ19YzN967FKNCcNwiLiDa6NOhiqD~l0naSdzq3RFt~KifovfFwlrIcxSd2I6~Qs-L5pgYFtOxGbDw2A1TbgHhozfmlPmt9MhCbAiqDsFbTZXsEuzCYZX5oySltsZU6VCHdxHeVEnK1I3UqN5mQjwueJTaJ2EX0fw8MTkF67pB~aKQ__',
            category: {
                time: ' 10 minutes',
                food: '  Healthy',
            },
            isLike: false
        },
         {
            id: 5,
            name: 'Chicken Meatballs with Cream Cheese',
            img: 'https://s3-alpha-sig.figma.com/img/e6f0/82c6/8c251dd7a6228b84e9d68e27ddf2d47d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GAeCq01WZyNSYcMZuUiKweet7XjqheQXMAndoapegqVVAVvSXJYv4kpbEuaBIutIfXqJ81KV54Mv4ea~ysJSpdvJSeNPWPViHnQVLJqmExTEqIyJbEZEtAYY4BFSluso5fAz~r3Qz~kxZwdacxAUVTsD4Il4h3QgfzzgHG38-1INR9~oW5TR-9kQ034KmE9KOSrwIa02cwjJHBGGSN5FIw74OWIW0bc1FgqDNs7lHMJZDYZVkOuVzGrhQ1RcSgDhavP0LFEVv3WE6nxtHLuf89TfnAWoysJigRE2I~gM5L~y6w5L6ONzZFpc9eezKs59nfOBuIUvhKM3SGjYbsCeRw__',
            category: {
                time: ' 10 minutes',
                food: ' Meat',
            },
            isLike: false
        },
         {
            id: 6,
            name: 'Fruity Pancake with Orange & Blueberry',
            img: 'https://s3-alpha-sig.figma.com/img/d810/1a05/c7142857391eb1daf4856ed4d1f2b407?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jTysRqmoyzRBr0gvwOg2VDMeR~uAvFVZ5GzfO0LpIzgQ9o9ITwGMNQ8OdpXX5raQPGC7h1P1MZftKEXpoYGEd5r5C8EmoduiOXa51858tt2sVWRVDSn6dwRXRaSnWYq8vy8iDzOE-~0NBReNCISFCFuvCNhzCAbZIIodOfUfscsfWr12OFs-ydrAOScrg-prX7Sxpplrs9dul7qWEnsIsOMbYzAdQWGbTWsK8yRJXWwnupNK~Kn~FVnR1ZsAtd0gy2fNAYZ05RS4fu58HvGPNmsx-Gpef2ijugNhkIf4PqJPO216oE2h~AhS4lmNP5YyH0q5uPWCfGwfTKlUqc05LQ__',
            category: {
                time: ' 10 minutes',
                food: ' Sweet',
            },
            isLike: false
        },
         {
            id: 7,
            name:'The Best Easy One Pot Chicken and Rice',
            img: 'https://s3-alpha-sig.figma.com/img/eeb4/75f7/e48878fc5d01496e4a42246aaa891c80?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AzNmDmTSyAL6XVgeUhxfeANls0d65zAbIvSYU5lF-RIbOV9IgAdckGhXbICXWhnC5uDUS6a66n10nbTRJ5p7VrYJupDwr0NRf8VYd-H6tb8Y-Yr9UC641AcxpHdNpj65wVeSxWvILJh77wXAE3J7UE~YiokesI8fpOHFpXXywz-k701FXFIy1SqI840QodGKJtuZLwHvHOTfhgtzCMGkCFnx4Z12z42q4PJtPXN6X8x2R7IDTPEUIxGKEyu64~ayvYhhd3~GDLja-7iqrNdXtCxAWzeS6Q~ssK8IYePzn3W9x0CSoBO1rSq5~oZ38ahDnivVr6wY6PkTJSaCozFNGg__',
            category: {
                time: ' 10 minutes',
                food: ' Snack',
            },
            isLike: false
        },
         {
            id: 8,
            name: 'The Creamiest Creamy Chicken and Bacon Pasta',
            img: 'https://s3-alpha-sig.figma.com/img/94d1/9365/107208024a316bdda445c55742452207?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lw2Swk8NOcz-Uau3vRfqTo8mwKtvgJ-rcEXF-X9TqLo5D1fdKwPGDgFJ6R4V7aAFOik8aimp8DiNOnQfO4lelCUpf9ZabxcXGWkMCwb2xajJdjFzZqkma89uYnsuJ2UbTNNNtKC0iqHl41CzDL1KwVjHn6gn6SnikRlt0Gu8xfrjl57W0WuGz8WzRvZmaALvjDNkIfu8Nq2TnwjSrYfGSctiNPnu7oIvbDf0s5520b5M-BCF7Gx8pucmAIRpzrlzgV2GcOzo7jONZGWE8agxjudEzcHs0Go--9z2ZcFm8Kyvp11WT8Bp76L4aGF1NP95NWOCogpQHwrG8NVPoFcH8w__',
            category: {
                time: ' 10 minutes',
                food: ' Noodles',
            },
            isLike: false
        },

    ])

  return (
    <div className='list_menu'>
        <div className='list_menu_content'>
            <div className='list_menu_title'>Simple and tasty recipes</div>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
        </div>

        
       <div className='list_items_menu'>
            {items.map((item)=>{
                return(
                    <div className='list_menu_item' key={item.id}>
                        <div className='list_floating_menu_icon'>
                            <LikeIcon />
                        </div>
                       
                        <div className='list_menu_img'>
                            <img src={item.img}/>
                        </div>
                        
                        <div className='list_menu_item_title'>{item.name}</div>
                        <div className='list_menu_item_box_icon'>
                            <div className='list_menu_item_icon'><AccessTimeFilledIcon /><div className='p'>{item.category.time}</div></div>
                            <div className='list_menu_item_icon'><RestaurantIcon /><div className='p'>{item.category.food}</div></div>
                        </div>
    
                    </div>
                    )
            })}
       </div>
    </div>
  )
}

export default ListMenu;
import React from 'react'
import "./styles/homestyle.css"

import Avatar from '@mui/material/Avatar';
import Categories from '../components/categories/categories';
import SubBox from '../components/subscribe/subbox';
import Menu from '../components/menu/menu';
import ListMenu from '../components/listofmenu/listmenu';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function Homepage() {
  return (
   <div>
     <div className='home_flex_card'>
        <div className='rectangle left'></div>

            <div className='home_card'>

                <div className='home_content_card'>
                   <button className='home_card_btn_Recipes'>📜 Hot Recipes</button>
                    <div className='home_card_title'>Spicy delicious chicken wings</div>
                    <p className='home_desc_card'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <div className='home_card_group_btn'>
                      <div className='home_card_btn_div'>
                        <AccessTimeFilledIcon /> <p> 30 minuts</p>
                      </div>
                      <div className='home_card_btn_div'>
                        <RestaurantIcon /> <p>kitching</p>
                      </div>
                       
                    </div>
                     <div className='home_footer_card'>
                        <List sx={{ width: '100%', maxWidth: 360 }}>
                              <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44 }} src="https://s3-alpha-sig.figma.com/img/2649/d4c7/dab521f6cd5545aa07040c074c97ef51?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOfDhoSJEoi~7Gus5fooxRMlwdwU5Vzc1-wiSq~zlF4LUJ0JAoNK7cMk2M4bC89vw79FjsYBA9wqbUSep98MRY3NvCvtDS8ovCfK~0t8D4XIaYqqbIESp33y9UZ0nRzN1~V~RPh-1nnYBTboyU2lpaPYlwEhQRtSBpdgM~axYv~i-8PQab2jQKm3zgYyatxxO1fHejmhPjC3SLiKsVlJtM2MMGpTvzME7ctjAPso0ahtrZhTF3oJYG7UOoej5KJQWiqavl-YixbCVr0A3uDkNxaL50KKtVw4In0yMkmSwvYRi83RffBrgceTiBfoojR~C6WZC0jNpk25A~QAmDNFjw__" />
                                </ListItemAvatar>
                                <ListItemText primary="John Smith" secondary="15 March 2022" />
                            </ListItem>
                        </List>
                        <div className='home_card_footer_btn'><div>View Recipes</div>  <PlayCircleIcon /></div>
                        
                        </div>
                    </div>

                <div className='home_card_img'>
                    <img  src='https://s3-alpha-sig.figma.com/img/a685/0364/6edfd21071175cb80c78475e2182df7b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZtDzR7afiPRb76msSKedlxd7S~wmbubt9XT9W9OYMXTj9jledOsw80FteAhYFrXuyM~Ee26RNqW6IuvIEwezjQLZBDAk7FoFoa39u~DmbASukFI2Elgt0sKUx82Q2NnInXn0cmlr0TqngLIZrRKPWBHpSGF7eR8BkbqXS6zqO83XS5KnVoh196Q9WoVNvhqxzbzubqB14wIDucW55zjsY1LYLv4MtxxpSwZYIrbMj~K~AlxvOKiErIjuvg-wJqw4mq0iu1fbVgdwRVFXyfgdikxi2YbPx0WWkM5Oux0g7aLi~K8hACrB5unBBjbVhwF86Ricpo7ZYRidd2GGtC4nA__'/>
                </div>
  
            </div>
        <div className='rectangle right'></div>
    </div>
    <Categories />
    <ListMenu />
    <SubBox />
    <Menu />
   </div>
  )
}

export default Homepage;



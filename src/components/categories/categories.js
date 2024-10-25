import React, { useState } from 'react'
import './categories.css'
function Categories() {
    const [categoriesList, setCategories] = useState([
        {id: 1, name: 'Breakfast', img:'https://s3-alpha-sig.figma.com/img/59ba/0d40/ae079fb4994abba251d7610744b0f8db?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eQSITbYpvJYjPD2Djy~QdwvwVVrHI4DnUpO-x4VimVojWSRdSZkFGcZ3IbFCZLUXQ1F6qwQ8GjAxZXefHLVeywcO0gWj0cfNGpy0ZZ0pyw9zM~9tFzcbGp5DCK1demp3FuQPqlIET8nvv4tgR8o5Qvd-vDwbqERFBlzIAafjhiYrqLGVKEvNw4y9omENEvO-jYC6KzIbsYqGU0lOrA6gxfTCNiiHrlTNGmikYZS3zbVfQ8Sf8LL4yxiRwZkkjPbhVE5K7NvdLlWPOzTAG3WEtoQRKuRmNCi2CJ3LzVKM0739gB0PJhjpqKKKsynNYhI71hKZv2IqQ1j2UJ2UM~QIWQ__' ,color:'linear-gradient(180deg, rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)'},
        {id: 2, name: 'vegan', img:'https://s3-alpha-sig.figma.com/img/3c3e/ac8a/34ec2f46023c1f2f2c59bd5daafb19fc?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TbvtMI6a5645i83sESKo6swk-Ezl71YB290FSzO8CFZzUUXN28LiZUOc0S8Qjrg9LdiK8jhz9ZvB12m4VrBVEbWT3Cn4jS5Ud6AItuu4DEyRpnploWL237LQZ-X2nLqTmSsihGq~iO8OppPNdnLxDZHG-3BmwshWrjRhTlCeY-bBqFFlDvPq0WHBc8Q5ngjjWxEokVxApKY~DdMg5cHYjlhQjv8UPxP66HPA5sL7bGVACilSs9BqqBnvB2co5Xm35vzkyE7NQiNi5pI-7eX59J46N4IsoHXP0f9pvgARSQIk6hLYQOlzsXcB6jyYo5AmuNYDn~I0RRRoGaYkP3cf0w__',color:'linear-gradient(180deg, rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)'},
        {id: 3, name: 'Meat',img:'https://s3-alpha-sig.figma.com/img/f60e/17c0/2770f31b7f468d41197c73bed8ab0e6c?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jpaPigNXWZJ7ArT9n1tcQlC-XEZSrD9TF0FSdumR-~wBcxxr6mUFphDhOBTtfwLILcZyoXh9968cekaj0HYyE9WoQPdHr5C545GdAhhtKvsyVhqkCSsBKa~CXL6IyzK5BPyHH~xDydzMwxDn-Ucabow3re4Z-a4n5Wbnpx~zktD9fqETb6EsrugHDEgkwrFH~KH6yBZ14tynIMyw3aPcUAmCIIm~7G7hwIPQNUDyNJFhQ8lrcmOsZL27-KyPN6pLwgoThWfT078Mjsuv0G0EWjA0sc00~CyNIsrXcqQiovgLUL2Llo6Tahg1MoJc3J3w4O64gxMf0gnnooZyT7k0tA__',color:'linear-gradient(180deg, rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)'},
        {id: 4, name: 'Dessert', img:'https://s3-alpha-sig.figma.com/img/4bcf/2f69/90afd1fe52d379e76c9c1d9f59ddd6f4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WzUpys~sTbTZq2CK6U90u-6~I8yajZV2dPH504uMqgQKuogwVALMXEDI7Zhn6LXX5DhkOsJZ52Hhs3XpE8wmnme69LCpZjbZA02ioBTkpOxBNW2u5n-nRqz5kW6kaiKDU5ocJeGUUm6NeEkzxe2J3wRtxR~vedEtMk6qoO-ys585QDVxdUj~3W3e-vJ00hciV7kLzvO~0WGb3CewWA9CAtBiHcmhE0oYHdwNo0bsT8ftlov86rDbIsHI60M~nuXoz5o3vOdxNDQ7-uF8x2PsCW3iMgOF86oS4CBKsoNlhlzeD0LTuRpD929mS6SSDw9KNPCO6zmNQX5gBNL004H5tg__',color:'linear-gradient(180deg, rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)'},
        {id: 5, name: 'Lunch', img:'https://s3-alpha-sig.figma.com/img/06f6/4454/2b82304f25a0909e8cd668c0fb074356?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wc8rn8LeWCAe5ogHe5U57lTYQtSOrEd3WyjiqKlrRARh9vheSDalQVwubhTX1fIYjW~aTP0StjqwJ0uzS4FnFUmMwbUDqnRC1cCbRmpNDSS12ZqbCMTXLpC1-uuHiiaCAVZtTUrcYw83099XSrIdMrT6jqPSp-lG6C8SoicJc47X~VcXkOLUjCTGWw49F2GaJDHxobPCiret76UBPWINpm~gwszvSzrL36LCAhE9iNG51ItXzOHcB6OQx3Ynp-jCgulokWsjkdYsrMWdXWMWoXftCc9ER5H09iuLTn6m5afHNiAwiJ9Tl7b6fQIb03kBVBjdhfBN5cdHlcKR0qngZw__',color:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)'},
        {id: 6, name: 'Chocolate', img:'https://s3-alpha-sig.figma.com/img/fe1b/d4dd/6dd35a1bebf0dd288cb7c6b7c0f87e22?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eu3J-rXkpKlUAqHxHL6oZI693C3G9M769c9KjUQFl6noSw4LhDMmKl~2UTtXFTUBvYfkhvabeEU0hS8is5Bop7LWaGn19QhAPPWkJqvipea7iuA9cNCZ7X2ewrzKVI7TJA7FK5U07zmmwVqe~TdvtPviNgYgaBlQPrypTU1Zd8wu8VK8pZ~wNwu6p-z~IuO38~-eTICK45ezvBa~my5Axy5sAqCgTsA4~JOYNjTZp6jxEnEqOahz5tNgtDhdZ47-O~dchFaTLCNzVcrCDn7TZ83rawkP-waSS1uLDmPSEVFNFYctHQxVJuWQQLhdPDeEh~QwiYh9zKocEnpdxBO8oQ__',color:'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.05) 100%)'},
    ])

  return (
    <div className='categories_container'>
       <div className='categories_div'>
            <div className='categories_title'>Catagories</div>
            <button className='categories_btn'>View all Categories</button>
       </div>

       <div className='categories_list'>
            {categoriesList.map(category =>{
                return(
                    <div key={category.id} className='category_item' style={{
                        background: category.color,
                    }}>
                        <img className='category_img' src={category.img} alt={category.name}/>
                        <img className='category_img_hideen' src={category.img} alt={category.name}/>
                        <div className='category_name'>{category.name}</div>
                    </div>
                )
            })}
       </div>
    </div>
  )
}

export default Categories
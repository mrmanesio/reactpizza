import React from 'react'
import { Categories, Sort, PizzaBlock } from '../components/index';

function Home(props:any) {
    return (
        <div className="container">
        <div className="content__top">

          <Categories 
            items={['Мясные', 'Вегетарианская','Гриль','Острые','Закрытые']}
            onClickItem = {(name:string) => console.log(name)}
          />

          <Sort 
            items={[{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]}
          />
        </div>


        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          

         { props.items.map((obj:any) => <PizzaBlock 
              key = {obj.id}
              {...obj}
         />)  }


        </div>
      </div>
   
    )
}

export default Home

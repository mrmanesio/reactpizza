import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames'

function PizzaBlock(props:any) {
    const avaibleTypes = ['тонкое', 'традиционное'];
    const avaibleSize = [26, 30, 40];
    const [activeType, setActiveType] = React.useState(props.types[0]);
    const [activeSize, setActiveSize] = React.useState(props.sizes[0]);

    const onSelectType = (index:number) => {
        setActiveType(index);
    } 

    const onSelectSize = (index:number) => {
        setActiveSize(index);
    }

    return (
        <div className="pizza-block" key = {props.id}>
          <img
            className="pizza-block__image"
            src={props.imageUrl}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{props.name}</h4>
          <div className="pizza-block__selector">
            <ul>
                {avaibleTypes.map((type, index) => (
                    <li key = {index}
                        onClick = {() => onSelectType(index)}
                        className = {classNames({
                            active: activeType === index,
                            disabled: !props.types.includes(index),
                        })}>
                    {type}</li>
                ))}
            </ul>
            <ul>
                {avaibleSize.map((size, index) => (
                    <li key = {index}
                        onClick = {() => onSelectSize(index)}
                        className = {classNames({
                            active: activeSize === index,
                            disabled: !props.sizes.includes(size),
                        })}>
                        {size} см.
                    </li>
                ))}
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {props.price}&nbsp;₽</div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
    )
}


PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

PizzaBlock.defaultProps = {
    name: '---',
    imageUrl: 'https://avatars3.githubusercontent.com/u/59669309?s=460&u=0ea8cf8f29cb5e8b520e2c0e1c87dda9aab2cd5b&v=4',
    types: [],
    sizes: [],
}

export default PizzaBlock

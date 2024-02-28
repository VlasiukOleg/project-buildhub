import {
  MaterialsWrap,
  ImgWrap,
  InfoWrap,
  Price,
  QuantityWrap,
  DecreaseBtn,
  IncreaseBtn,
  Input,
  TotalPrice,
} from './MaterialsList.styled';

export const MaterialsList = ({
  image,
  title,
  description,
  price,
  quantity,
  index,
  ind,
  onChangeQuantity,
  handleChange,
  totalPrice,
}) => {
  return (
    <MaterialsWrap>
      <ImgWrap>
        <img src={image} alt={title} />
      </ImgWrap>

      <InfoWrap>
        <h2>{title}</h2>
        <p>{description}</p>
        <Price>Ціна: {price} грн.</Price>
      </InfoWrap>
      <QuantityWrap>
        <DecreaseBtn
          onClick={() => onChangeQuantity(index, ind, -1)}
          disabled={quantity === 0}
        >
          -
        </DecreaseBtn>
        <Input
          type="text"
          name="quantity"
          value={quantity}
          onChange={e => handleChange(e, index, ind)}
        />
        <IncreaseBtn onClick={() => onChangeQuantity(index, ind, 1)}>
          +
        </IncreaseBtn>
      </QuantityWrap>
      <TotalPrice>{totalPrice.toFixed(2)} грн.</TotalPrice>
    </MaterialsWrap>
  );
};

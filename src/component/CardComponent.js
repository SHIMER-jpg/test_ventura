import styles from "styled-components";
import { useState } from "react";

const Wrapper = styles.section`    
  position:relative;
  display:flex;
  flex-direction: column;
  overflow-wrap: break-word;
  overflow: hidden;
  margin: 0.5rem;
  width: 230px;
  background-color: #fff;
  border: 1px solid rgb(216, 220, 222);
  height: auto;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px 10px -1px rgba(0,0,0,0.1);
  }
  `;

const Header = styles.div`
  display: flex;
  width:100%;
  height: 200px;
  `;

const Duration = styles.span`
  position: absolute; 
  top: 8px;
  left: 8px;
  text-overflow: ellipsis;
  padding:4px 8px;
  white-space: nowrap;
  overflow: inherit;
  color:white;
  background-color: #51626b;
  border-radius: 4px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: bold;
  font-size:12px;
  `;

const ImgHeader = styles.img`
  user-select:none;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  `;

const Information = styles.div`
  position: relative;
  display:flex;
  flex-direction: column;  
  align-items:flex-start;
  padding:0 14px;
  margin-bottom: 5rem;
`;

const Pricing = styles.div`
  align-self:flex-end;
  color: rgb(80, 97, 106);
  line-height: 1.5;
  font-size: 0.9rem;
  text-align: right;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  padding-top:12px;
  padding-bottom:12px;
`;

const Title = styles.h6`
  box-sizing: border-box;
  margin: 0px 0px 0.5rem;
  min-width: 0px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-weight: 700;
  line-height: 1.3;
  color: rgb(62, 81, 91);
  font-size: 1.125rem;
  text-align: left;
  margin-bottom: 0;
  `;

const Description = styles.p`
  margin: 0.5rem 0px;
  font-weight:600;
  min-width: 0px;
  color: rgb(80, 97, 106);
  line-height: 1.5;
  overflow-wrap: break-word;
  text-align:left;
  margin-top:8px;
  `;

const Button = styles.button`
  all:unset;
  position:absolute;
  bottom: 10px;
  right: 10px;
  background-color: #66cc66;
  font-weight: 600;
  line-height: 1.5;
  padding: 6px 16px;
  border-radius: 4px;
  user-select:none;
  color:white;

  &:hover {
    background-color: #4caf50;
  }
`;

const CardComponent = ({
  amount_of_days,
  composite_price,
  name,
  photos,
  emotional_headline,
}) => {
  const [isRender] = useState(
    amount_of_days && composite_price && name && photos && emotional_headline
  );

  const [index, setIndex] = useState(0);

  const handleError = (e) => {
    e.target.onError = null;
    if (index < photos.length - 1) {
      setIndex(index + 1);
      e.target.src = `https://cdn.viventura.info/img/480x360/${photos[index].id}.jpg`;
    } else {
      e.target.src = "https://via.placeholder.com/480x360";
    }
  };

  return (
    isRender && (
      <Wrapper>
        <Header>
          {/* dias imagen */}
          <Duration>{amount_of_days} DÍAS</Duration>
          <ImgHeader
            src={`https://cdn.viventura.info/img/480x360/${photos[0].id}.jpg`}
            alt={photos[0].cached_alt_text}
            onError={(e) => handleError(e)}
          />
        </Header>
        <Information>
          <Pricing>
            Desde {Number(composite_price.price).toFixed(0)} USD
          </Pricing>
          <Title>{name}</Title>
          <Description>{emotional_headline} </Description>
        </Information>
        <Button>VER VIAJE</Button>
      </Wrapper>
    )
  );
};

export default CardComponent;

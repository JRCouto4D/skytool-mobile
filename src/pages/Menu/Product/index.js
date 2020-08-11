import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Background from '../../../components/Background';
import { formatPrice } from '../../../util/format';

import { 
  Container, 
  Content, 
  Header,
  BoxTopHeader,
  BoxLeft,
  BoxProduct,
  Sector,
  DivTop,
  NameProduct,
  Description,
  PriceProduct,
  BoxFooterHeader,
  ProviderName,
  DivFooter,
  DeliveryTime,
  BoxImage,
  Image,
  Separator,
  Comments,
  Footer,
  Total,
  BoxFooter,
  BoxAmount,
  RemoveButtom,
  Amount,
  AddBottom,
  FinishButtom,
  FinishText,
} from './styles';

const Product = ({ route }) => {
  const product = route.params;
  const [amount, setAmount] = useState(1);

  function addItem() {
    setAmount(amount + 1);
  }

  function removeItem() {
    setAmount(amount - 1);
  }

  return (
    <Background>
      <Container>
        <Content>
          <Header>
            <BoxTopHeader>
              <BoxLeft>
                <BoxProduct>
                  <Sector>{product.sector}</Sector>
                  <DivTop />
                  <NameProduct>{product.name}</NameProduct>
                </BoxProduct>
                <Description>{product.description}</Description>
              </BoxLeft>

              <PriceProduct>{formatPrice(product.value)}</PriceProduct>
            </BoxTopHeader>

            <BoxFooterHeader>
              <MaterialIcons name="store" size={20} color="#FFF" />
              <ProviderName>{product.provider.name}</ProviderName>
              <DivFooter />
              <DeliveryTime>40-30 min</DeliveryTime>
            </BoxFooterHeader>
          </Header>

          <BoxImage>
            <Image 
              source={{ uri: product.image
                ? product.image.url
                : `https://ui-avatars.com/api/?color=A28FD0&background=F4EFFC&bold=true&format=png&size=140&rounded=true&name=${product.name}`
              }}
            />
          </BoxImage>

          <Separator />

          <Comments />
        </Content>

        <Footer>
          <Total>R$ 30,00</Total>
          <BoxFooter>
            <BoxAmount>
              <RemoveButtom 
                disabled={amount === 1 ? true : false}
                onPress={removeItem}
              >
                <MaterialIcons 
                  name="remove-circle-outline" 
                  size={20}
                  color={amount === 1 ? "#aaa" : "#FFF"} 
                />
              </RemoveButtom>
              <Amount>{amount}</Amount>
              <AddBottom onPress={addItem}>
              <MaterialIcons 
                name="add-circle-outline" 
                size={20}
                color="#FFF" 
              />
              </AddBottom>
            </BoxAmount>

            <FinishButtom>
              <FinishText>Adicionar</FinishText>
              <MaterialIcons name="shopping-cart" size={20} color="#FFF" />
            </FinishButtom>
          </BoxFooter>
        </Footer>
      </Container>
    </Background>
  );
}

export default Product;
import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import Background from '../../../components/Background';
import { formatPrice } from '../../../util/format';
import { 
  addToCartRequest, 
  updateToItemCartRequest,
} from '../../../store/module/cart/actions';

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

const Product = ({ route, navigation }) => {
  const product = route.params.itemCart ? route.params.itemCart.product : route.params.product;
  const item = route.params.itemCart;

  const [amount, setAmount] = useState(item ? item.amount : 1);
  const [comment, setComment] = useState(item ? item.comments : '');
  const [total, setTotal] = useState(product ? product.value : null);
  const [totalView, setTotalView] = useState(
    product ? formatPrice(product.value) : ''
  );
  const dispatch = useDispatch();

  function addToCart() {
    const provider_id = product.provider.id;
    const data = {
      amount,
      comment,
      total,
    }
    dispatch(addToCartRequest(product, provider_id, data));
    navigation.navigate('Cart');
  }

  function editItemCart() {
    const item_id = item.id;
    const data = {
      amount,
      comment,
      total,
    }
    dispatch(updateToItemCartRequest(item_id, data, product));
    navigation.navigate('Cart');
    
  }

  useMemo(() => {
    const calc = product.value * amount;
    setTotal(calc);
    const response = formatPrice(calc);
    setTotalView(response);
  }, [product, amount]);

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

          <Comments
            value={comment}
            onChangeText={setComment}
          />
        </Content>

        <Footer>
          <Total>{totalView}</Total>
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

            <FinishButtom onPress={item ? editItemCart : addToCart}>
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
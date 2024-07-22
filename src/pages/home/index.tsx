import { useContext } from "react";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { coffee as coffeeData } from "../../coffee.json";

// MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// interfaces
import * as ICoffee from "../../interfaces/Coffee";

// Assets
import coffeeCup from "../../assets/coffeeCup.svg";

// Global components
import IconArea from "../../components/IconContainer";
import { CoffeeContext } from "../../contexts/CoffeeContext";

// Local components
import Product from "./components/Product";

// Styles
import {
  HeaderContainer,
  DescriptionArea,
  DescriptionItem,
  MainContainer,
  TitleArea,
} from "./styles";

const Home = () => {
  const coffeeList: ICoffee.model[] = coffeeData;
  const { itemsInCart } = useContext(CoffeeContext);

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <HeaderContainer>
        <DescriptionArea>
          <TitleArea>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            {md && <img src={coffeeCup} alt="" />}
          </TitleArea>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
          <div className="descriptionItemList">
            <div className="descriptionItemColumn">
              <DescriptionItem>
                <IconArea variant="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </IconArea>
                Compra simples e segura
              </DescriptionItem>
              <DescriptionItem>
                <IconArea variant="yellow">
                  <Timer size={16} weight="fill" />
                </IconArea>
                Entrega rápida e rastreada
              </DescriptionItem>
            </div>
            <div className="descriptionItemColumn">
              <DescriptionItem>
                <IconArea variant="baseLabel">
                  <Package size={16} weight="fill" />
                </IconArea>
                Embalagem mantém o café intacto
              </DescriptionItem>
              <DescriptionItem>
                <IconArea variant="purple">
                  <Coffee size={16} weight="fill" />
                </IconArea>
                O café chega fresquinho até você
              </DescriptionItem>
            </div>
          </div>
        </DescriptionArea>
        {!md && <img src={coffeeCup} alt="" />}
      </HeaderContainer>
      <MainContainer>
        <h1>Nossos cafés</h1>
        <div className="productListContainer">
          {coffeeList.map((cf: ICoffee.model) => {
            const isInCart =
              itemsInCart.find((ic) => ic.item?.id === cf.id) || null;
            return <Product key={cf.id} coffee={cf} quantityItem={isInCart} />;
          })}
        </div>
      </MainContainer>
    </>
  );
};

export default Home;

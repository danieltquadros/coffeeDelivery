import { useContext } from "react";
import { Plus, Minus } from "phosphor-react";

// Interfaces
import * as ICartItem from "../../interfaces/CartItem";
import * as ICoffee from "../../interfaces/coffee/index.ts";

// Context
import { CoffeeContext } from "../../contexts/CoffeeContext/index.tsx";

// Styles
import {
  AddAndSubtractContainer,
  SubtractButton,
  AmountArea,
  AddButton,
} from "./styles";

interface AddAndSubtractProps {
  quantityItem: ICartItem.model | null;
  coffee: ICoffee.model;
  noRemove?: boolean;
  noSubtractInOne?: boolean;
}

const AddAndSubtract = ({
  quantityItem,
  coffee,
  noRemove,
  noSubtractInOne,
}: AddAndSubtractProps) => {
  const { addCoffeeInCart, subtractCoffeeOfCart } = useContext(CoffeeContext);
  const disableSubtract = !!(
    (noSubtractInOne && quantityItem?.quantity === 1) ||
    !quantityItem
  );

  const handleAdd = () => {
    addCoffeeInCart(coffee);
  };

  const handleSubtract = () => {
    if (noRemove && quantityItem) {
      if (quantityItem.quantity > 1) {
        subtractCoffeeOfCart(coffee);
        return;
      }
      return;
    }
    subtractCoffeeOfCart(coffee);
  };

  return (
    <AddAndSubtractContainer>
      <SubtractButton disabled={disableSubtract} onClick={handleSubtract}>
        <Minus size={14} weight="bold" />
      </SubtractButton>
      <AmountArea>{quantityItem ? quantityItem.quantity : 0}</AmountArea>
      <AddButton onClick={handleAdd}>
        <Plus size={14} weight="bold" />
      </AddButton>
    </AddAndSubtractContainer>
  );
};

export default AddAndSubtract;

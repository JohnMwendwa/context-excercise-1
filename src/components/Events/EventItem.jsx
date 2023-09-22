import { useCartContext } from "../../contexts/cart-context";
import classes from "./EventItem.module.css";

function EventItem({ event }) {
  const { cartItems, addItemHandler, removeItemHandler } = useCartContext();

  const isInCart = cartItems.some((item) => item.id === event.id);

  let buttonCaption = "Add to Cart";
  let buttonAction = () => addItemHandler(event);

  if (isInCart) {
    buttonCaption = "Remove from Cart";
    buttonAction = () => removeItemHandler(event.id);
  }

  return (
    <li className={classes.event}>
      <img src={event.image} alt={event.title} />
      <div className={classes.content}>
        <h2>{event.title}</h2>
        <p className={classes.price}>${event.price}</p>
        <p>{event.description}</p>
        <div className={classes.actions}>
          <button onClick={buttonAction}>{buttonCaption}</button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

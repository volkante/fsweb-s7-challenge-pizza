import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, ButtonToolbar } from "reactstrap";

export default function Quantity({ pizzaCount, setPizzaCount }) {
  return (
    <div className="quantity">
      <ButtonToolbar>
        <ButtonGroup className="me-2">
          <Button
            disabled={pizzaCount < 2}
            onClick={() => {
              //bu onclick eventler karışık ve uzun değil burada yer alabilir.
              setPizzaCount(pizzaCount - 1);
            }}
            className="custom-button"
          >
            -
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      <p>{pizzaCount}</p>
      <ButtonToolbar>
        <ButtonGroup>
          <Button
            disabled={pizzaCount > 19}
            onClick={() => {
              //en fazla aynı anda 20 pizza söyleyebilsin. Yoksa yetişemeyiz.
              setPizzaCount(pizzaCount + 1);
            }}
            className="custom-button"
          >
            +
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
      {/*  <button
        disabled={pizzaCount < 2}
        onClick={() => {
          //bu onclick eventler karışık ve uzun değil burada yer alabilir.
          setPizzaCount(pizzaCount - 1);
        }}
      >
        -
      </button>
      <p>{pizzaCount}</p>
      <button
        disabled={pizzaCount > 19}
        onClick={() => {
          //en fazla aynı anda 20 pizza söyleyebilsin. Yoksa yetişemeyiz.
          setPizzaCount(pizzaCount + 1);
        }}
      >
        +
      </button> */}
    </div>
  );
}

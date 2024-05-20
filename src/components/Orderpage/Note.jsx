import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function Note({ pizzaData, onChange }) {
  return (
    <div className="note">
      <Form>
        <FormGroup>
          <Label for="exampleTest">
            <h5>Sipariş notu</h5>
          </Label>
          <Input
            type="textarea"
            name="note"
            id="exampleTest"
            placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
            value={pizzaData.note}
            onChange={onChange}
          />
        </FormGroup>
      </Form>
    </div>
  );
}

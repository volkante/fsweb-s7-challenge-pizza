import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormGroup, Input, Label } from "reactstrap";

export default function NameInput({ pizzaData, onChange }) {
  function validateName() {}

  return (
    <div className="nameInput">
      <hr />
      <Form>
        <FormGroup>
          <Label>
            <h5>
              İsminiz <span>*</span>
            </h5>{" "}
            <Input
              name="fullName"
              value={pizzaData.fullName}
              placeholder="Lütfen isminizi giriniz"
              onChange={onChange}
            />
          </Label>
        </FormGroup>
      </Form>
    </div>
  );
}

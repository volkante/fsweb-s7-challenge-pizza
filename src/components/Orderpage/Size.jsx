export default function Size({ onChange }) {
  return (
    <div className="size">
      <h5>
        Boyut Seçiniz <span>*</span>
      </h5>
      <form>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="Küçük Boy"
            onChange={onChange}
          />
          Küçük
        </label>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="Orta Boy"
            onChange={onChange}
          />
          Orta
        </label>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="Büyük Boy"
            onChange={onChange}
          />
          Büyük
        </label>
      </form>
    </div>
  );
}

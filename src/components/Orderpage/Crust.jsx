export default function Crust({ pizzaData, onChange }) {
  const { crust } = pizzaData;

  return (
    <div className="crust">
      <h5>
        Hamur Seçiniz <span>*</span>
      </h5>
      <select name="crust" id="crust" value={crust} onChange={onChange}>
        <option value="">Hamur Kalınlığı</option>
        <option value="ince">İnce</option>
        <option value="kalin">Kalın</option>
      </select>
    </div>
  );
}

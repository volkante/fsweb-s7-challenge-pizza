export default function Summary({ priceToppings, totalPrice }) {
  return (
    <div className="summary">
      <h5>Sipariş Toplamı</h5>
      <p className="secimlerToplam">
        Seçimler:
        <span>{priceToppings} Tl</span>
      </p>
      <p className="tumToplam">
        Toplam:
        <span>{totalPrice} Tl</span>
      </p>
    </div>
  );
}

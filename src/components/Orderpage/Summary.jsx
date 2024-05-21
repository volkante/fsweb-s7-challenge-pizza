const errorMessages = {
  pizzaSize: "Lütfen pizza boyutunu seçiniz.",
  crust: "Lütfen pizza hamuru seçiniz.",
  priceToppings: "En az 4 adet en fazla 10 adet malzeme seçebilirsiniz.",
  fullName: "İsminiz 3 karakterden az olamaz.",
};

export default function Summary({ priceToppings, totalPrice, errors }) {
  return (
    <>
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

      <div className="errorMessages">
        {!errors.pizzaSize && (
          <div className="sizeError">
            <p>
              <span style={{ color: "red", marginRight: "2px" }}>*</span>
              {errorMessages.pizzaSize}
            </p>
          </div>
        )}

        {!errors.crust && (
          <div className="crustError">
            <p>
              <span style={{ color: "red", marginRight: "2px" }}>*</span>
              {errorMessages.crust}
            </p>
          </div>
        )}

        {!errors.toppings && (
          <div className="toppingError">
            <p>
              <span style={{ color: "red", marginRight: "2px" }}>*</span>
              {errorMessages.priceToppings}
            </p>
          </div>
        )}

        {!errors.fullName && (
          <div className="nameInputError">
            <p>
              <span style={{ color: "red", marginRight: "2px" }}>*</span>
              {errorMessages.fullName}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

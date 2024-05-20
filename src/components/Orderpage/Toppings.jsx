const toppings = [
  "Mozzarella",
  "Mantar",
  "Domates",
  "Yeşil biber",
  "Kırmızı biber",
  "Zeytin",
  "Sucuk",
  "Jambon",
  "Salam",
  "Ançüez",
  "Mısır",
  "Soğan",
  "Rokfor peyniri",
  "Fesleğen",
  "Sarımsak",
  "Avakado",
];

export default function Toppings({ onChange }) {
  return (
    <div className="toppings">
      <h5>
        Malzemeler <span>*</span>
      </h5>
      <p>En az 4 adet, en fazla 10 adet malzeme seçebilirsiniz. 5 Tl</p>
      <form>
        {toppings.map(
          (
            topping,
            index //map ile yukarıda kendi oluşturduğum toppings arr'ı map'liyoruz.
          ) => (
            <div className="checkbox" key={index + 1}>
              <label key={index}>
                <input
                  type="checkbox"
                  name="addedToppings"
                  value={topping}
                  onChange={onChange}
                />
                {topping}
              </label>
            </div>
          )
        )}
      </form>
    </div>
  );
}

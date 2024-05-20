import Header from "./Header.jsx";
import Description from "./Description.jsx";
import Size from "./Size.jsx";
import Crust from "./Crust.jsx";
import Toppings from "./Toppings.jsx";
import NameInput from "./NameInput.jsx";
import Note from "./Note.jsx";
import Quantity from "./Quantity.jsx";
import Summary from "./Summary.jsx";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import "./Orderpage.css";

const initialData = {
  pizzaName: "Sade Pizza", //DONE - bu değişmiyor bu görevde hep sade pizza.
  price: 0, // size küçükse 100, ortaysa 150, büyükse 200 tl diyoruz size component'ında.
  priceToppings: 0, //malzeme başı 5 tl.
  pizzaSize: "", //bu price'ı etkiliyor doğrudan.
  crust: "", //DONE - bunun fiyata veya başka bir şeye herhangi bir etkisi olmayacak.
  addedToppings: [], //length'e göre priceToppings hesaplanacak. En az 4 en fazla 10. Yoksa Submit disabled.
  note: "", //bir şeye etkisi yok.
  fullName: "", //3 karakter olmadıkça submit button çalışmayacak.
  pizzaCount: null, // hem total fiyata hem seçimlerin fiyatına etki ediyor.
  totalPrice: 0,
};

const errorMessages = {
  priceToppings: "En az 4 adet en fazla 10 adet malzeme seçebilirsiniz",
  pizzaSize: "Lütfen pizza boyutunu seçiniz",
  crust: "Lütfen ince hamur mu kalın hamur mu istediğinizi belirtiniz",
  fullName: "İsminiz en az 3 karakterden oluşabilir",
};

const errors = {
  priceToppings: false,
  pizzaSize: false,
  crust: false,
  fullName: false,
};

export default function Order() {
  const [pizzaData, setPizzaData] = useState(initialData);
  const [pizzaCount, setPizzaCount] = useState(1); //pizza sayısını ayrı state'de tuttum. Denemek için. Muhtemelen
  //mevcut state'de pizzaData.pizzaCount da olurdu. Avantajı, dezavantajı?
  const [errors, setErrors] = useState();
  const [isValid, setIsValid] = useState(false);

  let history = useHistory(); //submit başarılıysa success sayfasına yönlendirmek için useHistory kullanıyoruz.

  function handleChange(e) {
    const { name, value } = e.target;
    //formların name'ine göre if else bloklarıyla pizzaData'yı setle.
    if (name === "pizzaSize") {
      setPizzaData({
        ...pizzaData,
        [name]: value,
        price: value === "Küçük Boy" ? 100 : value === "Orta Boy" ? 150 : 200,
      });
    } else if (name === "addedToppings") {
      let newToppingsArr;
      const oldToppingsArr = pizzaData[name];
      if (oldToppingsArr.includes(value)) {
        newToppingsArr = oldToppingsArr.filter((item) => item !== value);
      } else {
        newToppingsArr = [...oldToppingsArr, value];
      }
      setPizzaData({ ...pizzaData, [name]: newToppingsArr });
    } else {
      //(name === "crust" || name === "fullName" || name === "note") giriyor bu else'e!
      setPizzaData({ ...pizzaData, [name]: value });
    }
  }

  useEffect(() => {
    let priceToppings = 0;
    if (pizzaData.price) {
      priceToppings = pizzaData.addedToppings.length * 5 * pizzaCount; //eğer pizza seçilmişse(fiyatı varsa)
      //fiyat ekstra malzemelerin fiyatını hesapla. Yoksa pizza boyutu seçilmeden sadece malzemelerin fiyatı toplama giriyor!
    }
    let totalPrice = pizzaData.price * pizzaCount + priceToppings; //pizza boyutuna göre gelen fiyatı pizza sayısıyla çarp ve ekstra
    //ları ekle
    setPizzaData({ ...pizzaData, totalPrice, priceToppings, pizzaCount }); //PizzaData state'i bu verilere göre güncelle.

    ///validasyonlar (isim>=3 && toppings sayısı && hamur && toplam ücret===true)
    if (
      pizzaData.fullName.replaceAll(" ", "").length >= 3 &&
      pizzaData.addedToppings.length > 3 &&
      pizzaData.addedToppings.length < 11 &&
      pizzaData.crust &&
      pizzaData.totalPrice
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    pizzaData.fullName,
    pizzaData.addedToppings,
    pizzaData.price,
    pizzaData.crust,
    pizzaData.totalPrice,
    pizzaCount,
  ]); //sadece bunlarda değişiklik olduğunda çalışsın setterFunction.

  const handleSubmit = () => {
    axios
      .post("https://reqres.in/api/pizza", pizzaData)
      .then((res) => {
        history.push("/success");
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="order-page">
      <Header />
      <section className="main-section">
        <Description pizzaData={pizzaData} />
        <div className="pizzaSize-Crust">
          <Size onChange={handleChange} />
          <Crust pizzaData={pizzaData} onChange={handleChange} />
        </div>
        <Toppings onChange={handleChange} />
        <NameInput pizzaData={pizzaData} onChange={handleChange} />
        <Note pizzaData={pizzaData} onChange={handleChange} />
        <div className="quantity-summary">
          <Quantity pizzaCount={pizzaCount} setPizzaCount={setPizzaCount} />
          <div className="summaryAndButton">
            <Summary
              priceToppings={pizzaData.priceToppings}
              totalPrice={pizzaData.totalPrice}
            />
            <div>
              <Button
                color="primary"
                className="submitButton"
                disabled={!isValid}
                style={{ padding: "10px" }}
                onClick={() => {
                  handleSubmit();
                }}
              >
                Sipariş ver
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

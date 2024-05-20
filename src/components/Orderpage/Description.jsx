export default function Description({ pizzaData }) {
  const { pizzaSize, pizzaName, price } = pizzaData;

  return (
    <article className="description">
      <h4>
        <span>{pizzaSize} </span>
        {pizzaName}
      </h4>
      <div className="pizza-info">
        <p className="price">{price} Tl</p>
        <p className="rating">{4.9} </p>
        <p className="numberComments">{200}</p>
      </div>
      <p>
        Pizzanız, incelikle hazırlanan hamurun üzerine dilediğiniz malzeme ile
        kaplanır. Lorem ipsum dolor sit amet.. Her dilimde sizi key ve doğal
        lezzetlerle buluşturan bu pizza, pizza tutkunları için vazgeçilmezdir.
        Lorem ipsum dolor sit amet. Bu şahane tadı deneyimlemeye sadece birkaç
        tık uzaktasınız.
      </p>
    </article>
  );
}

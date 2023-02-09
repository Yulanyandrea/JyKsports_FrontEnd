/* eslint-disable react/prop-types */
import './style.css';

const Filter = ({ onFilterChange }) => {
  const brands = ['Adidas', 'Nike', 'Converse', 'Sneakers', 'Reebok', 'Puma', 'Fila'];
  const sizes = ['34', '35', '36', '37', '38', '39', '40'];
  const colors = ['Azul', 'Negro', 'Rosado', 'Verde', 'Aguamarina', 'Amarillo', 'Blanco', 'Rojo'];

  const handelChange = ({ target }) => {
    const { value, name } = target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="menuFilter">
      <section className="menuFilter__brand">
        <label htmlFor="brand-names" className="menuFilter__brand--text">Marca</label>
        <select
          label="name"
          name="brand"
          onChange={handelChange}
        >
          <option name="null"> </option>
          {brands.map((brand) => {
            return (<option key={brand} name="brand" value={brand}>{brand}</option>);
          })}
        </select>
      </section>
      <section className="menuFilter__size">
        <label htmlFor="size" className="menuFilter__size--text">Talla</label>
        <select
          label="size"
          name="size"
          onChange={handelChange}
        >
          <option name="null"> </option>
          {sizes.map((size) => {
            return (<option name="size" key={size} value={size}>{size}</option>);
          })}

        </select>
      </section>
      <section className="menuFilter__color">
        <label htmlFor="color" className="menuFilter__color--text">Color</label>
        <select
          label="color"
          name="color"
          onChange={handelChange}
        >
          <option name="null"> </option>
          {colors.map((color) => {
            return (<option name="color" key={color} value={color}>{color}</option>);
          })}
        </select>
      </section>
    </div>
  );
};

export default Filter;

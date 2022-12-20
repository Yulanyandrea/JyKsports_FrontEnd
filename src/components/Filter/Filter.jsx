import './style.css';

const Filter = () => {
  return (
    <div className="menuFilter">
      <section className="menuFilter__brand">
        <label htmlFor="brand-names" className="menuFilter__brand--text">Marca</label>
        <select label="name" name="brand-name">
          <option value="null"> </option>
          <option value="nike">Nike</option>
          <option value="addidas">Addidas</option>
          <option value="puma">Puma</option>
          <option value="lacoste">Lacoste</option>
          <option value="newbalance">New Balance</option>
          <option value="skechers">Skechers</option>
          <option value="versace">Versace</option>
          <option value="file">Fila</option>
        </select>
      </section>
      <section className="menuFilter__size">
        <label htmlFor="size" className="menuFilter__size--text">Talla</label>
        <select label="size" name="size-name">
          <option value="null"> </option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="42">43</option>
          <option value="42">44</option>
          <option value="42">45</option>
        </select>
      </section>
      <section className="menuFilter__color">
        <label htmlFor="color" className="menuFilter__color--text">Color</label>
        <select label="color" name="color-name">
          <option value="null"> </option>
          <option value="white">Blanco</option>
          <option value="black">Negro</option>
          <option value="blue">Azul</option>
          <option value="pink">Rosado</option>
          <option value="green">Verde</option>
          <option value="purple">Morado</option>
          <option value="red">Rojo</option>
          <option value="gray">Gris</option>
        </select>
      </section>
    </div>
  );
};

export default Filter;

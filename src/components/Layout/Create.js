import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = (props) => {
  const history = useHistory();

  const URL = "https://pipiopiproj.herokuapp.com/items/";

  const [newItem, setNewItem] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img: "",
  });

  const getItem = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setNewItem(data);
  };

  const createItem = async (item) => {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(item),
    });
    props.getShoes();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem(form);
    history.push("/");
  };

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          value={form.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />{" "}
        <br />
        Description:{" "}
        <input
          type="text"
          value={form.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />{" "}
        <br />
        Price:{" "}
        <input
          type="text"
          value={form.price}
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />{" "}
        <br />
        Image:{" "}
        <input
          type="text"
          value={form.img}
          name="img"
          placeholder="Image"
          onChange={handleChange}
        />
        <br />
        <input className="form-submit" type="submit" value="Create Item" />
      </form>
    </section>
  );
};

export default Create;

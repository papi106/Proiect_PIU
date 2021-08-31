import React, {useState, useEffect} from 'react';
import List from '../../components/List';
import Alert from '../../components/Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if(list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const GroceryList = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: "", type: ""});

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name) {
      showAlert(true, "danger", "Please enter a value item.");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if(item.id === editID) {
            return {...item, title: name}
          }
          return item
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item name changed.")
    } else {
      showAlert(true, "success", "Item added to the grocery list.");
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg});
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item removed from the grocery list.");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
  };

  const clearList = () => {
    showAlert(true, "warning", "Cleared the grocery list.");
    setList([]);
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert{ ...alert} removeAlert={showAlert} list={list} />}
        <h3 style={{marginBottom: "1.5 rem", textAlign: "center"}}>
          Grocery List
        </h3> 

        <div className="mb-3 form gap-3">
          <input
          type="text"
          className="form-control"
          placeholder="e.g. Eggs"
          onChange={(e) => setName(e.target.value)}
          value={name}
          />
          <button type="submit" className="btn btn-success">
            {isEditing ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{marginTop: "3 rem"}}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className="text-center">
            <button className="btn btn-warning" onClick={clearList}>
              Clear Grocery List
            </button>
          </div>
        </div>
      )}
    </section> 
  );
};
export default GroceryList;
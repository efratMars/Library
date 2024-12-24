import { useState, useEffect } from "react";
import BookStore from './BookStore';
import { observer } from 'mobx-react-lite';
import './style.css';
import './responsive.css';

const AddBook = observer(({ bookToEdit, onSubmit }) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (bookToEdit) {
      setInputs(bookToEdit);
    }
  }, [bookToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const validateForm = () => {// בדיקות תקינות
    const newErrors = {};
    if (!inputs.name) {
      newErrors.name = 'אנא הזן שם ספר';
    }
    if (!inputs.writer) {
      newErrors.writer = 'אנא הזן שם הסופר';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      if (inputs.id) {
        BookStore.editBook(inputs);
      } else {
        BookStore.setBook(inputs);
      }
      setInputs({});
      if (onSubmit) {
        onSubmit(inputs);
      }
    }    
  };

  return (
    //(הנוספים שבקומפוננטה BookDetails..)צריך להוסיף עוד שדות עם פרטי הספר
    //וכן כפתור 'חזור' שיחזיר אותנו לדף הבית 
    <form onSubmit={handleSubmit} className="add-book-form">
      <label>
        שם הספר:
        <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>
      <br />
      <label>
        תיאור:
        <input type="text" name="description" value={inputs.description || ""} onChange={handleChange} />
      </label>
      <br />
      <label>
        סופר:
        <input type="text" name="writer" value={inputs.writer || ""} onChange={handleChange} />
        {errors.writer && <span className="error">{errors.writer}</span>}
      </label>
      <br />
      <button type="submit" className="submit-button">{inputs.id ? 'ערוך ספר' : 'הוסף ספר'}</button>
    </form>
  );
});

export default AddBook;

import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (valeus, actions) => {
    if (!valeus.query) {
      toast("Write.... and we will find it 😉", {
        duration: 3000,
      });
      return;
    }
    setQuery(valeus.query);
    actions.resetForm();
  };
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            placeholder="Search images and photos"
            type="search"
            autoComplete="off"
            className={s.input}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const searchData = e.target.elements.search.value;
//   if (!searchData) {
//     toast("Write.... and we will find it 😉", {
//       duration: 3000,
//     });
//     return;
//   }
//   onSubmit(searchData);
//   e.target.reset();
// };
// return (
//   <header className={s.container}>
//     <form onSubmit={handleSubmit}>
//       <input
//         name="search"
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//       />
//       <button type="submit">Search</button>
//     </form>
//     <Toaster position="top-right" reverseOrder={true} />
//   </header>
// );

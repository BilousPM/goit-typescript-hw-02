import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import { FC } from "react";

interface SearchBarProps {
  setQuery: (value: string) => void;
}

interface Value {
  query: string;
}

interface Action {
  resetForm: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ setQuery }) => {
  const initialValue = {
    query: "",
  };

  const handleSubmit = (value: Value, actions: Action) => {
    if (!value.query) {
      toast("Write.... and we will find it 😉", {
        duration: 3000,
      });
      return;
    }
    setQuery(value.query);
    actions.resetForm();
  };
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
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

import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

export const Form = () => {
  const { handleChange, form } = useForm<FormData>({
    email: "",
    name: "",
    age: 0,
  });

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          type="email"
          className="form-control"
          name="name"
          onChange={handleChange}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Age:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          onChange={handleChange}
        ></input>
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};

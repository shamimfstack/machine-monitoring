import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ maxHeight: "90vh" }}>
      <div className="w-full md:w-1/2 mx-auto border p-12 mt-12 rounded-lg shadow-lg">
      <h2 className="text-3xl text-center font-bold mb-4">Register Here</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="w-full border p-2 my-2 rounded-sm" placeholder="Enter name" {...register("name", { required: true, maxLength: 20 })} />
        {errors.name && <span>This field is required</span>}

        <input className="w-full border p-2 my-2 rounded-sm" placeholder="Enter email" {...register("email", { required: true})} />
        {errors.email && <span>This field is required</span>}

        <input className="w-full border p-2 my-2 rounded-sm" placeholder="Enter password" {...register("password", { required: true, maxLength: 20 })} />
        {errors.password && <span>This field is required</span>}

        

        <input className="w-full border p-2 my-2 bg-green-600 text-white rounded-sm font-bold" type="submit" value="Regiter" />
      </form>
      <p>Already have an account? Please <Link to="/login"><span className="text-purple-600 font-bold">Login</span></Link> here.</p>
      </div>
    </div>
  );
}

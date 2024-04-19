import { useFormContext } from "react-hook-form";

const GSInput = () => {
  const { register } = useFormContext();

  return <input {...register("test")} />;
};

export default GSInput;

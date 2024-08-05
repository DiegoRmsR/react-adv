import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);
  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const resetForm = () => {
    setFormData({ ...initialState });
  };

  return { ...formData, onChangeForm, onSubmitForm, resetForm };
};

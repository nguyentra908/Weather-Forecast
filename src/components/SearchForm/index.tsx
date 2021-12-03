import { OutlinedInput } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  search: string;
};
type SearchFormProps = {
  onSubmit: Function;
};
const SearchForm = (props: SearchFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data: any) => props.onSubmit(data);
  return (
    <form className="search" onSubmit={handleSubmit(onSubmit)}>
      <OutlinedInput
        size="small"
        className="search__input"
        {...register("search")}
      />
      <OutlinedInput
        size="small"
        className="search__submit"
        type="submit"
        value="Search"
      />
    </form>
  );
};

export default SearchForm;

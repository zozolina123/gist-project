import React, { FormEvent, useState } from "react";

const SearchBar: React.FC = () => {
  const [input, setInput] = useState("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    console.log(e);
    setInput(e.currentTarget.value);
  };

  return <input onChange={onChange} value={input} type="text" />;
};

export default SearchBar;

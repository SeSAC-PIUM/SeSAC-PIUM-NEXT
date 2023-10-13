import * as React from "react";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  color: "#000",
  border: "1px solid #e9e9ee",
  borderRadius: "4px",
  padding: "8px 32px",
  lineHeight: "32px",
  fontSize: "13.333px",
  boxSizing: "border-box",
  marginBottom: "10px",
  "&:focus": {
    outline: "2px solid #2DA96E",
    cursor: "pointer",
  },
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "auto",
  border: "1px solid #e9e9ee",
  borderRadius: "4px",
  padding: "10px",
  "& li": {
    // height:"40px",
    lineHeight: "40px",
    fontSize: "16px",
    padding: "0 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  "& li.Mui-focused": {
    backgroundColor: "#2DA96E",
    color: "white",
    cursor: "pointer",
  },
}));

export default function UseAutocomplete({
  kind,
  onLifting,
  item,
  placeholder,
}) {
  const [value, setValue] = useState();

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    value: value,
    onChange: (event, newValue) => {
      setValue(newValue);
    },
    id: "use-autocomplete-demo",
    options: item,
    getOptionLabel: (option) => option,
  });

  useEffect(() => {
    onLifting(kind, value);
  }, [value]);

  return (
    <div className="relative flex-1">
      {/* <div>{`value: ${value !== null ? `'${value.item}'` : 'null'}`}</div> */}
      <div {...getRootProps()}>
        {/* <Label {...getInputLabelProps()}>useAutocomplete</Label> */}
        <Input {...getInputProps()} placeholder={placeholder} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li key={index} {...getOptionProps({ option, index })}>
              {option}
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

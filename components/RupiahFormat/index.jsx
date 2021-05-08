import NumberFormat from "react-number-format";
export default function RupiahFormat(props) {
  return (
    <NumberFormat
      value={props.value}
      displayType={"text"}
      thousandSeparator={"."}
      prefix={"Rp "}
      decimalSeparator={","}
      decimalScale={0}
      fixedDecimalScale={true}
    />
  );
}

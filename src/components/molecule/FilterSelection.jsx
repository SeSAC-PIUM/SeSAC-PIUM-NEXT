export default function FilterSelection({text}){
  console.log(text)
  return(
  <ul>
          {text.map((ele, index) => {
        return (
          <li>{ele}</li>
        );
      })}
  </ul>

  )
}
export default function BorderBottom({marginTop, marginBottom}) {
  console.log(marginTop, marginBottom)
  return <p className={`w-full h-px bg-[--color-grayscale-300] ${marginTop} ${marginBottom}`}></p>;
}
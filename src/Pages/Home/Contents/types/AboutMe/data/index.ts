export type DataType = string[]

async function getData(): Promise<DataType> {
  const data = await fetch('http://localhost:3333/about_me');
  return data.json();
}

export default getData;

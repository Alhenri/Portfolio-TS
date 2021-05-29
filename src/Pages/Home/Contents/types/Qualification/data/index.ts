export interface DataInterface {
  backGroundColor: string;
  img: string;
  lines: string[];
}

async function getData(): Promise<DataInterface[]> {
  const data = await fetch('http://localhost:3333/qualification');
  return data.json();
}

export default getData;

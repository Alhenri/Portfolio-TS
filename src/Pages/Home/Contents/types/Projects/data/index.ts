export interface DataInterface {
  title: string;
  img: string;
  lines: string[];
  links?: { icon: string; url: string }[];
}

async function getData(): Promise<DataInterface[]> {
  const data = await fetch('http://localhost:3333/projects');
  return data.json();
}

export default getData;

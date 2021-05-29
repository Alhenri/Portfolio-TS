export interface DataInterface {
  backGroundColor: string;
  img: string;
  lines: string[];
}

async function getData(): Promise<DataInterface[]> {
  console.log(process.env.REACT_APP_BASE_URL);
  const base_url = process.env.REACT_APP_MOCK === 'true'
    ? 'http://localhost:3333'
    : process.env.REACT_APP_BASE_URL;
  const data = await fetch(`${base_url}/qualification`);
  return data.json();
}

export default getData;

export type useGetDataProps = {
  endpoint: 'projects' | 'qualification' | 'about_me';
};

export type DataTypes =
  | string[]
  | {
      title: string;
      img: string;
      lines: string[];
      links?: { icon: string; url: string }[];
    }
  | {
      backGroundColor: string;
      img: string;
      lines: string[];
    }
  | null;

export type useGetDataPayload = {
  loading: boolean;
  data: any;
};

export type useGetDataType = (params: useGetDataProps) => useGetDataPayload;

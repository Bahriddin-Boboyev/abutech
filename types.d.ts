export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export interface dataType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

export type queryType = {
  data: dataType[] | undefined;
  error: Error | null;
  isLoading: boolean;
};

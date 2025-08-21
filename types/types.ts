export type Categories = "govt" | "private";

export interface IJobCircular {
  _id: string;
  slug: string;
  title: string;
  companyName: string;
  banner: string;
  images: string[];
  vacancy: string;
  deadline: string;
  categories: Categories;
  description: string;
  views: number;
  createdAt: string;
}

export type TNotice = {
    notice: string;
}

export type TErrorSource = {
  path: string;
  message: string;
};

export type TGenericErrorResponse = {
  success?: boolean;
  statusCode: number;
  message: string;
  errorSources: TErrorSource[];
  stack?: string;
};

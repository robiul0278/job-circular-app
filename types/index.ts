export type IJobPost = {
  _id: string;
  slug: string;
  title: string;
  companyName: string;
  image: string;
  technology: string[];
  description: string;
  deadline: string;
  vacancy:number;
  applyLink: string;
  applyStart: string;
  views: number;
  createdAt: string; 
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

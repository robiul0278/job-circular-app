export type IJobPost = {
  _id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  image: string;
  education: string[];
  description: string;
  vacancy: number;
  views: number;
  published: string;
  startApply: string;
  deadline: string;
  applyLink: string;
  createdAt: string; 
  updatedAt?: string;
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

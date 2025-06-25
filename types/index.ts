export interface IJobPost {
  jobId: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  deadline: string; 
  jobDescription: string;
  views: number;
  tags: string[];
  createdAt: string;
}
export interface Job {
  id: string;
  title: string;
  logoUrl: string;
  description: string;
  responsibilities: string;
  isBookmarked: boolean;
  status: string;
  idealCandidate: string;
  categories: string[];
  startDate: string;
  endDate: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgName: string;
  datePosted: string;
  deadline: string;
}

export interface ABOUTDATA {
    id: number;
    imagePath: string;
    title: string;
    description: string;
  }

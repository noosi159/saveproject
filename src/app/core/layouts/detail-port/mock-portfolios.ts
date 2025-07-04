//mock-portfolios.ts

export interface Portfolio {
  id: number;
  name: string;
  faculty: string;
  user_id: number;
  file_path: string;
  file_type: string;
  category: string;
  repo_url: string;
  repo_type: string;
  details: string;
  created_at: string;
  updated_at: string;
}

export const MOCK_PORTFOLIOS: Portfolio[] = [
  {
    id: 1,
    name: 'John Smith',
    faculty: 'Computer Science',
    user_id: 42,
    file_path: 'assets/port.pdf',
    file_type: 'pdf',
    category: 'Web Development',
    repo_url: 'https://github.com/noosi159',
    repo_type: 'GitHub',
    details: 'React/Node.js projects',
    created_at: '2025-07-04T09:00:00',
    updated_at: '2025-07-04T09:00:00'
  },
];

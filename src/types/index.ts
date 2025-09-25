export type TaskStatus = 'completed' | 'pending';

export interface Task {
  id: string;
  week: number;
  title: string;
  date: string;       // ISO: '2023-08-01'
  summary: string;
  details: string;
  file?: string;      // /pdfs/archivo.pdf
  status: TaskStatus;
}

export interface AcademicInfo {
  fullName: string;
  program: string;
  university: string;
  semester: string;
  email: string;
  avatarUrl: string;  // /assets/foto_perfil.png
  stats: { completed: number; performance: number; featuredProjects: number; };
}

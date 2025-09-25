import { Task } from '@/types';

export const TASKS: Task[] = [
  {
    id: 't1',
    week: 1,
    title: 'FORMULARIO DE EXCEL',
    date: '2023-08-01',
    summary: 'Formulario en Excel para recolección de datos.',
    details: 'Guarda datos de usuarios en un archivo Excel para análisis.',
    file: '/pdfs/formulario_excel.pdf',
    status: 'completed',
  },
  {
    id: 't2',
    week: 2,
    title: 'INVESTIGACIÓN DE TECNOLOGÍAS WEB',
    date: '2023-08-08',
    summary: 'Análisis de frameworks modernos.',
    details: 'Comparativa de React, Vue y Angular.',
    file: '/pdfs/investigacion.pdf',
    status: 'completed',
  },
  {
    id: 't3',
    week: 3,
    title: 'DISEÑO DE INTERFAZ DE USUARIO',
    date: '2023-08-15',
    summary: 'Wireframes y prototipos.',
    details: 'UX para aplicación de gestión de tareas académicas.',
    status: 'pending',
  },
];

export interface TaskItem {
  title: string;
  description?: string; // Optional description prop
  dueDate?: string; // Optional dueDate prop
  onDelete: () => void;
}

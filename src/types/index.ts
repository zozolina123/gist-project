export interface IGistData {
  description: string;
  id: string;
  numberOfFiles: number;
  languages: string[];
  filesInfo: IFileInfo[];
}

export interface IFileInfo {
  fileName: string;
  language: string;
  fileUrl: string;
  forkedBy?: string[];
}

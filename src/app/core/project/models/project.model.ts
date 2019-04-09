export interface Project {
  projectName: string;
  discription?: string;
  clientName?: string;
  country?: string;
  email?: string;
  skypeId?: string;
  startDate?: number;
  documents?: Document[];
  allocatedResource: AllocatedResource[];
  status: string;
  projectId?: string;
}

export interface AllocatedResource {
  resourceid: string;
  name?: string;
  hours?: number;
  costPerhour?: number;
  email?: string;
  allocation?: TimeInterval;
}

export interface TimeInterval {
  start: string;
  end: string;
}

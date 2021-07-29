import { IDeveloper } from './../../../app/model/developer.model';
import { IRepository } from './../../../app/model/repository.model';
import { AxiosError, AxiosResponse } from "axios";
import request from "../../../app/request";

export const fetchRepositories = (): Promise<AxiosResponse<any | AxiosError>> =>
request<IRepository[]>(
  'repositories',
  { method: 'GET' }
);

export const fetchDevelopers = (): Promise<AxiosResponse<any | AxiosError>> =>
request<IDeveloper[]>(
  'developers',
  { method: 'GET' }
);
import { IRepository } from './../../../app/model/repository.model';
import { fetchRepositories } from './../api/api';
import { fetchDevelopers } from "../api/api"
import { fetchDevelopersSuccess, fetchError, fetchRepositoriesSuccess } from "./trendingActions"

export const fetchDevelopersThunk = () => {
  return (dispatch: any) => {
    fetchDevelopers()
      .then((response) => dispatch(
        fetchDevelopersSuccess(response.data as any[])
      ))
      .catch((response) => dispatch(
        fetchError(response.data)
      ))
  }
}


export const fetchRepositoriesThunk = () => {
  return (dispatch: any) => {
    fetchRepositories()
      .then((response) => dispatch(
        fetchRepositoriesSuccess(response.data as IRepository[])
      ))
      .catch((response) => dispatch(
        fetchError(response.data)
      ))
  }
}
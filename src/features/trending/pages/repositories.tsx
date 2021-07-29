import { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RepositoryBoxRow } from "../components/repositoryBoxRow";
import { selectTrending } from "../store/trendingSelectors";
import { fetchRepositoriesThunk } from "../store/trendingThunks";

export const Repositories: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { repositories, isLoading, error } = useSelector(selectTrending);
  useEffect(() => {
    dispatch(fetchRepositoriesThunk());
  }, [dispatch]);
  return (
    <div>
      {
        repositories.map(repo => <RepositoryBoxRow repository={ repo } key={ repo.repositoryName } />)
      }
    </div>
  )
}
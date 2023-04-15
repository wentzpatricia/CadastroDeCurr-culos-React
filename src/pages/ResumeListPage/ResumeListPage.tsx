import Header from '../../containers/Header/Header';
import { ResumeList } from '../../containers/ResumeList/ResumeList';
import { ContainerResumeListPage } from './ResumeListPageStyle';

const ResumeListPage = () => {
  return (
    <ContainerResumeListPage>
      <Header />
      <ResumeList />
    </ContainerResumeListPage>
  );
};

export default ResumeListPage;

import { ResumeForm } from '../../components/ResumeForm/ResumeForm';
import Header from '../../containers/Header/Header';
import { ContainerResumeFormPage } from './ResumeFormPageStyle';

const ResumeFormPage = () => {
  return (
    <ContainerResumeFormPage>
      <Header />
      <ResumeForm />
    </ContainerResumeFormPage>
  );
};

export default ResumeFormPage;

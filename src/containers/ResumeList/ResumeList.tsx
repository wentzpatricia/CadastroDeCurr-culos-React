import { FormResumeInterface } from '../../model/formResumeInterface';
import imageResumeListEmmpty from './../../../src/assets/image2.png';
import { FiTrash2 } from 'react-icons/fi';
import {
  BtnAddNow,
  BtnExport,
  BtnRemove,
  InformationResumes,
  ResumeListEmptyStyle,
  ContainerResumeList,
  TitleResume,
} from './ResumeListStyle';
import { Link } from 'react-router-dom';
import { BsDownload } from 'react-icons/bs';
import ResumeListCard from '../../components/ResumeListCard/ResumeListCard';
import { useResumeForm } from '../../hooks/useResumeForm';

export const ResumeList = () => {
  const { curriculumList, exportResume, removeResume } = useResumeForm();

  return (
    <section>
      {curriculumList.length ? (
        <>
          <TitleResume>Resume List</TitleResume>
          <ContainerResumeList>
            {curriculumList.map((resume: FormResumeInterface, index) => {
              return (
                <InformationResumes key={resume.id}>
                  <ResumeListCard
                    name={resume.name}
                    lastName={resume.lastName}
                    phone={resume.phone}
                    email={resume.email}
                    birthDate={resume.birthDate}
                    gender={resume.gender}
                    expertise={resume.expertise}
                  />
                  <BtnExport
                    onClick={() => {
                      exportResume(index);
                    }}
                  >
                    <BsDownload />
                  </BtnExport>
                  <BtnRemove
                    onClick={() => {
                      removeResume(resume.id);
                    }}
                  >
                    <FiTrash2 />
                  </BtnRemove>
                </InformationResumes>
              );
            })}
          </ContainerResumeList>
        </>
      ) : (
        <ResumeListEmptyStyle>
          <h3>Resume List Empty!</h3>
          <img
            src={imageResumeListEmmpty}
            alt="ilustration of a woman search resumes"
          />
          <BtnAddNow>
            <Link to="/form-resume">Add your Resume now!</Link>
          </BtnAddNow>
        </ResumeListEmptyStyle>
      )}
    </section>
  );
};

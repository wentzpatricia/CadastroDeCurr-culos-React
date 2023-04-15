import { useContext, useEffect } from 'react';
import { FormResumeContext } from '../contexts/FormResumeContext';
import { FormResumeInterface } from '../model/formResumeInterface';
const LOCAL_STORAGE_KEY = 'resume:savedResume';
import { makeResumeInJson } from '../Utils/makeResumeInJson';

export const useResumeForm = () => {
  const { curriculumList, setCurriculumList } = useContext(FormResumeContext);

  const loadSaveResume = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setCurriculumList(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadSaveResume();
  }, []);

  const setResumeAndSave = (newResume: FormResumeInterface[]) => {
    setCurriculumList(newResume);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newResume));
  };

  const addResume = (newResume: FormResumeInterface) => {
    setResumeAndSave([...curriculumList, newResume]);
  };

  const removeResume = (idResume: string) => {
    const newResume = curriculumList.filter(
      (resume: FormResumeInterface) => resume.id !== idResume
    );
    setResumeAndSave(newResume);
  };

  const exportResume = (elementIndex: number) => {
    const singleResume = curriculumList.find(
      (element, index) => index === elementIndex
    );
    makeResumeInJson(singleResume);
  };

  return { addResume, removeResume, exportResume, curriculumList };
};

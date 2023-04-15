import React, { createContext, useState } from 'react';
import { FormResumeInterface } from '../model/formResumeInterface';

type Props = { children: React.ReactNode };

const DEFAULT_VALUE = {
  setCurriculumList: () => {},
  curriculumList: [],
};

interface PropsFormResumeContext {
  setCurriculumList: (newResume: FormResumeInterface[]) => void;
  curriculumList: FormResumeInterface[];
}

export const FormResumeContext =
  createContext<PropsFormResumeContext>(DEFAULT_VALUE);

export const FormResumeContextProvider: React.FC<Props> = ({ children }) => {
  const [curriculumList, setCurriculumList] = useState<FormResumeInterface[]>(
    []
  );

  return (
    <FormResumeContext.Provider
      value={{
        curriculumList,
        setCurriculumList,
      }}
    >
      {children}
    </FormResumeContext.Provider>
  );
};

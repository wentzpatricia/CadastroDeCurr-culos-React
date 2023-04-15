import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResumeFormPage from './pages/ResumeFormPage/ResumeFormPage';
import ResumeListPage from './pages/ResumeListPage/ResumeListPage';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form-resume" element={<ResumeFormPage />} />
        <Route path="/" element={<ResumeListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;

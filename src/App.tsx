import { FormResumeContextProvider } from './contexts/FormResumeContext';
import RoutesApp from './RoutesApp';
import GlobalStyle from './Style/GlobalStyle';

function App() {
  return (
    <FormResumeContextProvider>
      <GlobalStyle />
      <RoutesApp />
    </FormResumeContextProvider>
  );
}
export default App;

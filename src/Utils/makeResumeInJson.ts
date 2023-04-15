import { FormResumeInterface } from '../model/formResumeInterface';

export const makeResumeInJson = (
  singleResume: undefined | FormResumeInterface
) => {
  const link = document.createElement('a');
  document.body.appendChild(link);

  const blob = new Blob([JSON.stringify(singleResume)]);
  const blobUrl = URL.createObjectURL(blob);

  link.href = blobUrl;
  link.download = 'resumeList.json';
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );
  document.body.removeChild(link);
};

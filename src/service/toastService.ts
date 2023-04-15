import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showToastMessage = () => {
  toast.success('Resume Successfully Added!', {
    position: toast.POSITION.TOP_RIGHT,
  });
};

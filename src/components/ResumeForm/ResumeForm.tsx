import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { FiAlertTriangle } from 'react-icons/fi';
import {
  validateCPF,
  validateDate,
  validateEmail,
  validatePhone,
} from '../../Utils/validators';
import { FormResumeInterface } from '../../model/formResumeInterface';
import {
  ErrorMessage,
  ExpertiseStyle,
  FieldContainer,
  FormContainer,
  GenderSelection,
  GroupFormStyle,
  SubmitButton,
  TitleForm,
} from './ResumeFormStyle';
import { BsPen } from 'react-icons/bs';
import { showToastMessage } from '../../service/toastService';
import { ToastContainer } from 'react-toastify';
import { useResumeForm } from '../../hooks/useResumeForm';

export const ResumeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<FormResumeInterface>({ mode: 'onChange' });
  const { addResume } = useResumeForm();

  const onSubmit: SubmitHandler<FormResumeInterface> = (data) => {
    data.id = crypto.randomUUID();
    addResume(data);
    showToastMessage();
    reset();
    reset({ cpf: '', phone: '', birthDate: '' });
  };

  const requiredMessage: string = 'Field required!';

  return (
    <>
      <TitleForm>
        Register your resume <BsPen />
      </TitleForm>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FieldContainer>
          <input
            type="text"
            placeholder="your first name"
            {...register('name', {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: 'Just letters in the name',
              },
              required: requiredMessage,
              maxLength: { value: 20, message: 'The input is too long' },
              minLength: { value: 3, message: 'The input is too short' },
            })}
          />
          <ErrorMessage>
            {errors.name && (
              <span>
                <FiAlertTriangle />
                {errors.name.message}
              </span>
            )}
          </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
          <input
            type="text"
            placeholder="your last name"
            {...register('lastName', {
              pattern: {
                value: /^[A-Za-z ]+$/i,
                message: 'Just letters in the last name',
              },
              required: requiredMessage,
              maxLength: { value: 30, message: 'The input is too long' },
              minLength: { value: 3, message: 'The input is too short' },
            })}
          />
          <ErrorMessage>
            {errors.lastName && (
              <span>
                <FiAlertTriangle />
                {errors.lastName.message}
              </span>
            )}
          </ErrorMessage>
        </FieldContainer>

        <FieldContainer>
          <input
            type="text"
            placeholder="email@email.com"
            {...register('email', {
              required: requiredMessage,
              validate: validateEmail,
            })}
          />
          <ErrorMessage>
            {errors.email && (
              <span>
                <FiAlertTriangle />
                E-mail invalid
                {errors.email.message}
              </span>
            )}
          </ErrorMessage>
        </FieldContainer>

        <GroupFormStyle>
          <FieldContainer>
            <InputMask
              type="text"
              mask="999.999.999-99"
              placeholder="your CPF"
              {...register('cpf', {
                required: requiredMessage,
                validate: validateCPF,
              })}
            />

            <ErrorMessage>
              {errors.cpf && (
                <span>
                  <FiAlertTriangle />
                  CPF invalid
                  {errors.cpf.message}
                </span>
              )}
            </ErrorMessage>
          </FieldContainer>

          <FieldContainer>
            <InputMask
              type="text"
              mask="99/99/9999"
              placeholder="your birth date"
              {...register('birthDate', {
                required: requiredMessage,
                validate: validateDate,
              })}
            />
            <ErrorMessage>
              {errors.birthDate && (
                <span>
                  <FiAlertTriangle />
                  BirthDate invalid
                  {errors.birthDate.message}
                </span>
              )}
            </ErrorMessage>
          </FieldContainer>
        </GroupFormStyle>

        <GroupFormStyle>
          <FieldContainer>
            <InputMask
              type="text"
              placeholder="your telephone"
              mask=" (99) 9 9999-9999"
              {...register('phone', {
                required: requiredMessage,
                validate: validatePhone,
              })}
            />

            <ErrorMessage>
              {errors.phone && (
                <span>
                  <FiAlertTriangle />
                  Phone invalid
                  {errors.phone.message}
                </span>
              )}
            </ErrorMessage>
          </FieldContainer>

          <GenderSelection>
            <label>Gender</label>
            <select {...register('gender')}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </GenderSelection>
        </GroupFormStyle>

        <ExpertiseStyle
          id="expertise"
          {...register('expertise', {
            required: requiredMessage,
            maxLength: { value: 90, message: 'The input is too long' },
            minLength: { value: 10, message: 'The input is too short' },
          })}
          placeholder="Your Expertise ..."
        />
        <ErrorMessage>
          {errors.expertise && (
            <span>
              <FiAlertTriangle />
              {errors.expertise.message}
            </span>
          )}
        </ErrorMessage>
        <SubmitButton
          type="submit"
          disabled={!isDirty || !isValid}
          value="Submit"
        />
      </FormContainer>
      <ToastContainer />
    </>
  );
};

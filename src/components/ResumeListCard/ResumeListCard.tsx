import { ResumeListsCard } from './ResumeListCardStyle';

interface ResumeListCardProps {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate: string;
  gender: string;
  expertise: string;
}

const ResumeListCard = ({
  name,
  lastName,
  phone,
  email,
  birthDate,
  gender,
  expertise,
}: ResumeListCardProps) => (
  <ResumeListsCard>
    <h2>
      {name} {lastName}
    </h2>
    <h3>
      <span>Phone:</span> {phone}
    </h3>
    <h3>
      <span>Email:</span> {email}
    </h3>
    <h3>
      <span>BirthDate:</span> {birthDate}
    </h3>
    <h3>
      <span>Gender:</span>
      {gender}
    </h3>
    <p>
      <span>Expertise: </span>
      {expertise}
    </p>
  </ResumeListsCard>
);

export default ResumeListCard;

import { Kind, KindsContainer } from './styles';

const Kinds = ({ kinds, size }) => {
  return (
    <KindsContainer>
      {kinds.split(';').map((kind) => (
        <Kind key={kind} size={size}>
          {kind}
        </Kind>
      ))}
    </KindsContainer>
  );
};

export default Kinds;

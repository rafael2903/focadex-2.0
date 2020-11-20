import {Kind, KindsContainer} from './styles';

export default function Kinds( {kind, backgroundColors,size}) {

    kind = kind.split(";");
    
    return (
        <KindsContainer>
        {kind.map( (kind) => (
            <Kind key={kind} backgroundColors={backgroundColors} size={size} >{kind}</Kind>
        ))}
        </KindsContainer>
    );
}
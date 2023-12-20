import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({name, image, percent}) => {
    return (
        <Container>
            <UserPicture src={image} />
            <div>
                <NameText>{name}</NameText>
                <Progress percent={percent} />
            </div>
        </Container>
    )
}

export { UserInfo };
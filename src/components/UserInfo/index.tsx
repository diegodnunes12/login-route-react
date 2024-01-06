import { Container, NameText, Progress, UserPicture } from "./styles";
import { IUserInfo } from "./types";

const UserInfo = ({name, image, percent}: IUserInfo) => {
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
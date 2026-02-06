import { Header, Title } from "./styles";



interface Props {
    title: string;
    children?: React.ReactNode;
}

export default function ModalHeader({ title, children }: Props) {
    return (
        <Header>
            <Title>{title}</Title>
            {children}
        </Header>
    )
}
import { Footer } from "./styles";


interface Props {
    children: React.ReactNode;
}

export default function ModalFooter({ children }: Props) {
    return (
        <Footer>
            {children}
        </Footer>
    )
}
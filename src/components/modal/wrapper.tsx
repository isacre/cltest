import { Content, Wrapper } from "./styles";



interface Props {
    children: React.ReactNode;
    isOpen: boolean;
}
export default function ModalWrapper({ children, isOpen }: Props) {
  if(!isOpen) return null;
  return (
    <Wrapper>
        <Content>
            {children}
        </Content>
    </Wrapper>
  )
}

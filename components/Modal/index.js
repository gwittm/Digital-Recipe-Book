import { ContentDiv, ModalWrapper } from "@/components/Modal/ModalStyle.js";

export const Modal = ({ children }) => {
  return (
    <ModalWrapper>
      <ContentDiv>{children}</ContentDiv>
    </ModalWrapper>
  );
};

import styled, { keyframes } from "styled-components";

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite ease-in-out;
  border-radius: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

export const Header = styled.div`
  background-color: var(--primary-color);
  padding: 24px;
  border-radius: 16px 16px 0 0;
  height: 70px;
  display: flex;
  align-items: center;
`;

export const TitleSkeleton = styled(SkeletonBase)`
  height: 22px;
  width: 60%;
  background: linear-gradient(90deg, #5a7bc0 25%, #7b9ad8 50%, #5a7bc0 75%);
  background-size: 200% 100%;
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #999999;
  border-radius: 0 0 16px 16px;
`;

export const UserDetailsSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextLineSkeleton = styled(SkeletonBase) <{ width?: string }>`
  height: 18px;
  width: ${({ width }) => width || "100%"};
`;


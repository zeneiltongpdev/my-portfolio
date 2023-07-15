import { styled } from "styled-components";
import Curriculo from "../../assets/Curriculo.pdf";

const DownloadButtonStyle = styled.button`
  position: relative;
  border-width: 0;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  z-index: 1;

  &:hover {
    box-shadow: rgba(220, 20, 60, 0.25) 0px 54px 55px,
      rgba(220, 20, 60, 0.12) 0px -12px 30px,
      rgba(220, 20, 60, 0.25) 0px 4px 6px, rgba(220, 20, 60, 0.17) 0px 12px 13px,
      rgba(220, 20, 60, 0.09) 0px -3px 5px;
  }

  &:hover .download {
    transform: translateY(100%);
  }

  .download svg polyline,.download svg line {
    animation: DownloadButtonDocs 1s infinite;
  }

  @keyframes DownloadButtonDocs {
    0% {
     transform: translateY(0%);
    }
   
    50% {
     transform: translateY(-15%);
    }
   
    100% {
     transform: translateY(0%);
    }
`;

const DownloadButtonDocs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  min-height: 50px;
  padding: 0 10px;
  border-radius: 5px;
  z-index: 1;
  background-color: #dc143c;
  border: solid 5px #dc143c;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
`;

const DownloadButtonSVG = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  z-index: -1;
  border-radius: 4px;
  transform: translateY(0%);
  background-color: #111;
  border: solid 2px #dc143c;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
`;

const A = styled.a`
  text-decoration: none;
`;

const DownloadButton = () => {
  const handleButtonClick = () => {
    ("");
  };

  return (
    <A href={Curriculo} download>
      <DownloadButtonStyle onClick={handleButtonClick}>
        <DownloadButtonDocs>
          <svg
            className="css-i6dzq1"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line y2="13" x2="8" y1="13" x1="16" />
            <line y2="17" x2="8" y1="17" x1="16" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          Download CV Here!
        </DownloadButtonDocs>
        <DownloadButtonSVG className="download">
          <svg
            className="css-i6dzq1"
            strokeLinejoin="round"
            strokeLinecap="round"
            fill="none"
            strokeWidth="2"
            stroke="currentColor"
            height="24"
            width="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line y2="3" x2="12" y1="15" x1="12" />
          </svg>
        </DownloadButtonSVG>
      </DownloadButtonStyle>
    </A>
  );
};

export default DownloadButton;

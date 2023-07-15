import styled from "styled-components";

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 13%;
  height: 8%;
  margin-bottom: 3%;
  gap: 20px;

  /* border: 1px solid #dc143c; */

  @media (max-width: 1024px) {
    width: 20%;
    height: 8%;
  }
`;

const A = styled.a`
  text-decoration: none;
`;

const IconLinkedin = styled.svg`
  width: 38px;
  height: 38px;
  transition: 0.5s ease-in-out;
  /* border: 1px solid #dc143c; */

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  &:hover path {
    fill: #ffffff;
    stroke: #ffffff;
  }

  &:hover g {
    stroke: #ffffff;
  }
`;

const IconGitHub = styled.svg`
  width: 35px;
  height: 35px;
  transition: 0.5s ease-in-out;
  /* border: 1px solid #dc143c; */

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  &:hover path {
    stroke: #ffffff;
  }

  &:hover g {
    stroke: #ffffff;
  }
`;

const IconWhatsapp = styled.svg`
  width: 32px;
  height: 32px;
  transition: 0.5s ease-in-out;
  /* border: 1px solid #dc143c; */

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  &:hover path {
    fill: #ffffff;
  }
`;

const IconGmail = styled.svg`
  width: 37px;
  height: 35px;
  transition: 0.5s ease-in-out;
  /* border: 1px solid #dc143c; */

  &:hover {
    transform: translateY(-5px);
  }

  &:hover path {
    stroke: #ffffff;
  }
`;

const Socials = () => {
  return (
    <SocialMedia>
      <A href="https://www.linkedin.com/in/zeneiltongpdev/" target="_blank">
        <IconLinkedin>
          <svg
            fill="#dc143c"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-30 -20 595 595"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <g transform="translate(1)">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M68.12,4.267c-18.773,0-35.84,6.827-48.64,19.627C5.827,37.547-1,54.613-1,72.533c0,18.773,7.68,35.84,20.48,48.64 c12.8,12.8,30.72,20.48,47.787,19.627c0,0,0.853,0,1.707,0c17.067,0,33.28-6.827,46.08-19.627 c12.8-12.8,20.48-29.867,20.48-48.64c0.853-17.92-6.827-34.987-19.627-47.787C103.107,11.093,86.04,4.267,68.12,4.267z M103.107,109.227c-9.387,9.387-22.187,15.36-35.84,14.507c-12.8,0-26.453-5.12-35.84-14.507 c-10.24-9.387-15.36-23.04-15.36-36.693s5.12-26.453,15.36-36.693c9.387-9.387,22.187-14.507,36.693-14.507 c12.8,0,25.6,5.12,34.987,14.507c10.24,10.24,15.36,23.04,15.36,36.693S113.347,99.84,103.107,109.227z"
                      stroke="#dc143c"
                      stroke-width="20"
                      stroke-linecap="round"
                    />
                    <path
                      d="M101.4,157.867H32.28c-13.653,0-24.747,11.093-24.747,25.6v298.667c0,13.653,11.947,25.6,25.6,25.6H101.4 c13.653,0,25.6-11.947,25.6-24.747v-299.52C127,169.813,115.053,157.867,101.4,157.867z M109.933,482.987 c0,4.267-4.267,7.68-8.533,7.68H33.133c-4.267,0-8.533-4.267-8.533-8.533V183.467c0-4.267,3.413-8.533,7.68-8.533h69.12 c4.267,0,8.533,4.267,8.533,8.533V482.987z"
                      stroke="#dc143c"
                      stroke-width="20"
                      stroke-linecap="round"
                    />
                    <path
                      d="M391.533,149.333h-17.92c-33.28,0-64.853,14.507-85.333,37.547v-11.947c0-8.533-8.533-17.067-17.067-17.067H185.88 c-7.68,0-17.067,6.827-17.067,16.213v318.293c0,9.387,9.387,15.36,17.067,15.36h93.867c7.68,0,17.067-5.973,17.067-15.36v-184.32 c0-28.16,20.48-50.347,46.933-50.347c13.653,0,26.453,5.12,35.84,14.507c8.533,7.68,11.947,19.627,11.947,34.987v183.467 c0,8.533,8.533,17.067,17.067,17.067h85.333c8.533,0,17.067-8.533,17.067-17.067v-220.16 C511,202.24,458.947,149.333,391.533,149.333z M493.933,489.813l-0.853,0.853h-83.627L408.6,307.2 c0-20.48-5.12-35.84-16.213-46.933c-12.8-12.8-29.867-19.627-47.787-19.627c-35.84,0.853-64,29.867-64,67.413v182.613h-93.867 V174.933h84.48l0.853,0.853v53.76l23.04-23.04l0.853-0.853c17.067-23.893,46.933-39.253,78.507-39.253h17.92 c57.173,0,101.547,46.08,101.547,104.107V489.813z"
                      stroke="#dc143c"
                      stroke-width="20"
                      stroke-linecap="round"
                    />{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </IconLinkedin>
      </A>
      <A href="https://github.com/zeneiltongpdev" target="_blank">
        <IconGitHub>
          <svg
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621"
                stroke="#dc143c"
                stroke-width="4"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108"
                stroke="#dc143c"
                stroke-width="4"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108"
                stroke="#dc143c"
                stroke-width="4"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181"
                stroke="#dc143c"
                stroke-width="4"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        </IconGitHub>
      </A>
      <A href="https://wsp.zeneiltongp.dev" target="_blank">
        <IconWhatsapp>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                fill="#dc143c"
              ></path>{" "}
            </g>
          </svg>
        </IconWhatsapp>
      </A>
      <A href="mailto:zeneiltongranja@gmail.com" target="_blank">
        <IconGmail>
          <svg
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                stroke="#dc143c"
                stroke-linejoin="round"
                stroke-width="12"
                d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"
              ></path>
            </g>
          </svg>
        </IconGmail>
      </A>
    </SocialMedia>
  );
};

export default Socials;

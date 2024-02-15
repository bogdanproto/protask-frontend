import {
  IconWrapper16,
  IconWrapper18,
  IconWrapper20,
  IconWrapper28,
  IconWrapper28wh,
  IconWrapper32,
} from './IconWrappers';

const styles15 = {
  stroke: 'currentColor',
  strokeOpacity: '1',
  strokeWidth: '1.5',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const styles13 = {
  stroke: 'currentColor',
  strokeWidth: '1.5',
  strokeOpacity: '1',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const LogoIcon = ({ size, fill }) => {
  return (
    <IconWrapper32 size={size}>
      <path
        d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z"
        fill={fill}
      />
      <path
        d="M13.3314 23.0269C13.5759 21.7553 13.7841 20.4168 14.0783 19.0782C14.2232 18.3777 14.0466 18.0788 13.2635 18.1324C12.4804 18.1859 11.6068 18.1591 10.7739 18.1324C9.94105 18.1056 9.79167 17.6862 10.2715 17.0883C12.6343 14.1703 15.0243 11.2881 17.4053 8.41472C17.6724 8.08902 17.9802 7.85701 18.4193 8.1024C18.8583 8.3478 18.7678 8.6512 18.6954 9.01706C18.4328 10.3556 18.2156 11.6941 17.9259 13.0058C17.7765 13.684 17.9711 13.9249 18.6773 13.8982C19.386 13.8625 20.096 13.8625 20.8047 13.8982C21.2076 13.8982 21.7372 13.6885 21.9454 14.2373C22.1536 14.7861 21.7146 15.0181 21.4928 15.3438C20.5875 16.4592 19.6701 17.5731 18.7406 18.6856C17.3797 20.3097 16.0292 21.9278 14.6894 23.54C14.4268 23.8567 14.1326 24.1111 13.6845 23.9504C13.2364 23.7898 13.3314 23.4106 13.3314 23.0269Z"
        fill="currentColor"
      />
    </IconWrapper32>
  );
};

export const HelpIcon = ({ size }) => {
  return (
    <IconWrapper20 size={size}>
      <path
        d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6023 1.66669 9.99996 1.66669C5.39759 1.66669 1.66663 5.39765 1.66663 10C1.66663 14.6024 5.39759 18.3334 9.99996 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        stroke-Linejoin="round"
      />
      <path
        d="M7.57495 7.49999C7.77087 6.94304 8.15758 6.47341 8.66658 6.17426C9.17558 5.87512 9.77403 5.76577 10.3559 5.86558C10.9378 5.96539 11.4656 6.26792 11.8458 6.71959C12.2261 7.17126 12.4342 7.74292 12.4333 8.33332C12.4333 9.99999 9.93328 10.8333 9.93328 10.8333"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14.1667H10.0125"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper20>
  );
};

export const FilterIcon = ({ size }) => {
  return (
    <IconWrapper16 size={size}>
      <path
        d="M14.6668 2H1.3335L6.66683 8.30667V12.6667L9.3335 14V8.30667L14.6668 2Z"
        stroke="currentColor"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper16>
  );
};

export const BellIcon = ({ size }) => {
  return (
    <IconWrapper16 size={size}>
      <path
        d="M6.23597 14C6.70606 14.4149 7.32355 14.6666 7.99985 14.6666C8.67615 14.6666 9.29365 14.4149 9.76373 14M11.9999 5.33331C11.9999 4.27245 11.5784 3.25503 10.8283 2.50489C10.0781 1.75474 9.06072 1.33331 7.99985 1.33331C6.93898 1.33331 5.92157 1.75474 5.17142 2.50489C4.42128 3.25503 3.99985 4.27245 3.99985 5.33331C3.99985 7.39344 3.48016 8.80395 2.89963 9.73692C2.40993 10.5239 2.16509 10.9174 2.17407 11.0272C2.18401 11.1487 2.20976 11.195 2.3077 11.2677C2.39616 11.3333 2.79491 11.3333 3.59242 11.3333H12.4073C13.2048 11.3333 13.6035 11.3333 13.692 11.2677C13.7899 11.195 13.8157 11.1487 13.8256 11.0272C13.8346 10.9174 13.5898 10.5239 13.1001 9.73692C12.5195 8.80395 11.9999 7.39344 11.9999 5.33331Z"
        {...styles15}
      />
    </IconWrapper16>
  );
};

export const MoveIcon = ({ size }) => {
  return (
    <IconWrapper16 size={size}>
      <path
        d="M2.2251 4.66665C3.3778 2.67398 5.53228 1.33331 7.99988 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998C14.6666 11.6819 11.6818 14.6666 7.99988 14.6666C5.53228 14.6666 3.3778 13.326 2.2251 11.3333"
        {...styles13}
      />
      <path d="M8 10.6666L10.6667 7.99998L8 5.33331" {...styles13} />
      <path d="M1.3335 8L10.6668 8" {...styles13} />
    </IconWrapper16>
  );
};

export const PencilIcon = ({ size }) => {
  return (
    <IconWrapper16 size={size}>
      <path
        d="M1.6665 14.3333L5.36602 12.9104C5.60264 12.8194 5.72096 12.7739 5.83165 12.7145C5.92997 12.6617 6.0237 12.6008 6.11186 12.5324C6.21112 12.4554 6.30075 12.3657 6.48002 12.1865L13.9999 4.66665C14.7362 3.93027 14.7362 2.73636 13.9999 1.99998C13.2635 1.2636 12.0696 1.2636 11.3332 1.99998L3.81336 9.51979C3.63409 9.69906 3.54445 9.7887 3.46743 9.88795C3.39902 9.97611 3.33811 10.0698 3.28533 10.1682C3.22591 10.2789 3.1804 10.3972 3.08939 10.6338L1.6665 14.3333ZM1.6665 14.3333L3.03858 10.766C3.13677 10.5107 3.18586 10.383 3.27006 10.3246C3.34365 10.2735 3.43471 10.2542 3.5227 10.271C3.62339 10.2902 3.72009 10.3869 3.91349 10.5803L5.41955 12.0863C5.61295 12.2797 5.70965 12.3764 5.72888 12.4771C5.74568 12.5651 5.72636 12.6562 5.67527 12.7298C5.6168 12.814 5.48916 12.8631 5.23388 12.9613L1.6665 14.3333Z"
        {...styles13}
      />
    </IconWrapper16>
  );
};

export const BasketIcon = ({ size }) => {
  return (
    <IconWrapper16 size={size}>
      <path d="M6 2H10" {...styles13} />
      <path d="M2 4H14" {...styles13} />
      <path
        d="M3.3335 4L3.73409 10.0089C3.80846 11.1245 3.84565 11.6823 4.02795 12.1304C4.35894 12.9441 5.02988 13.5718 5.86373 13.8479C6.32301 14 6.88206 14 8.00016 14V14C9.11826 14 9.67731 14 10.1366 13.8479C10.9704 13.5718 11.6414 12.9441 11.9724 12.1304C12.1547 11.6823 12.1919 11.1245 12.2662 10.0089L12.6668 4"
        {...styles13}
      />
    </IconWrapper16>
  );
};

export const ProjectIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M2.47276 3.92535C2.64182 3.20459 3.2046 2.64182 3.92535 2.47276V2.47276C4.54997 2.32624 5.20003 2.32624 5.82465 2.47276V2.47276C6.54541 2.64182 7.10818 3.20459 7.27724 3.92535V3.92535C7.42376 4.54997 7.42376 5.20003 7.27724 5.82465V5.82465C7.10818 6.54541 6.54541 7.10818 5.82465 7.27724V7.27724C5.20003 7.42376 4.54997 7.42376 3.92535 7.27724V7.27724C3.2046 7.10818 2.64182 6.54541 2.47276 5.82465V5.82465C2.32624 5.20003 2.32624 4.54997 2.47276 3.92535V3.92535Z"
        {...styles15}
      />
      <path
        d="M2.47276 12.1753C2.64182 11.4546 3.2046 10.8918 3.92535 10.7228V10.7228C4.54997 10.5762 5.20003 10.5762 5.82465 10.7228V10.7228C6.54541 10.8918 7.10818 11.4546 7.27724 12.1753V12.1753C7.42376 12.8 7.42376 13.45 7.27724 14.0747V14.0747C7.10818 14.7954 6.54541 15.3582 5.82465 15.5272V15.5272C5.20003 15.6738 4.54997 15.6738 3.92535 15.5272V15.5272C3.2046 15.3582 2.64182 14.7954 2.47276 14.0747V14.0747C2.32624 13.45 2.32624 12.8 2.47276 12.1753V12.1753Z"
        {...styles15}
      />
      <path
        d="M10.7228 3.92535C10.8918 3.20459 11.4546 2.64182 12.1753 2.47276V2.47276C12.8 2.32624 13.45 2.32624 14.0747 2.47276V2.47276C14.7954 2.64182 15.3582 3.20459 15.5272 3.92535V3.92535C15.6738 4.54997 15.6738 5.20003 15.5272 5.82465V5.82465C15.3582 6.54541 14.7954 7.10818 14.0747 7.27724V7.27724C13.45 7.42376 12.8 7.42376 12.1753 7.27724V7.27724C11.4546 7.10818 10.8918 6.54541 10.7228 5.82465V5.82465C10.5762 5.20003 10.5762 4.54997 10.7228 3.92535V3.92535Z"
        {...styles15}
      />
      <path
        d="M10.7228 12.1753C10.8918 11.4546 11.4546 10.8918 12.1753 10.7228V10.7228C12.8 10.5762 13.45 10.5762 14.0747 10.7228V10.7228C14.7954 10.8918 15.3582 11.4546 15.5272 12.1753V12.1753C15.6738 12.8 15.6738 13.45 15.5272 14.0747V14.0747C15.3582 14.7954 14.7954 15.3582 14.0747 15.5272V15.5272C13.45 15.6738 12.8 15.6738 12.1753 15.5272V15.5272C11.4546 15.3582 10.8918 14.7954 10.7228 14.0747V14.0747C10.5762 13.45 10.5762 12.8 10.7228 12.1753V12.1753Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const StarIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M9 1.5L10.509 5.42331C10.7205 5.97324 10.8262 6.2482 10.9907 6.47948C11.1364 6.68446 11.3155 6.86356 11.5205 7.00931C11.7518 7.17377 12.0268 7.27952 12.5767 7.49103L16.5 9L12.5767 10.509C12.0268 10.7205 11.7518 10.8262 11.5205 10.9907C11.3155 11.1364 11.1364 11.3155 10.9907 11.5205C10.8262 11.7518 10.7205 12.0268 10.509 12.5767L9 16.5L7.49103 12.5767C7.27952 12.0268 7.17377 11.7518 7.00931 11.5205C6.86356 11.3155 6.68446 11.1364 6.47948 10.9907C6.2482 10.8262 5.97324 10.7205 5.42331 10.509L1.5 9L5.42331 7.49103C5.97323 7.27952 6.2482 7.17377 6.47948 7.00931C6.68446 6.86356 6.86356 6.68446 7.00931 6.47948C7.17377 6.2482 7.27952 5.97324 7.49103 5.42331L9 1.5Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const LoadingIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M2.50519 12.7498C1.56607 11.1224 2.04355 9.04833 3.59847 7.99505L3.60013 7.99338C4.84923 7.14926 6.49331 7.17759 7.71325 8.06421L10.2873 9.93578C11.5064 10.8224 13.1505 10.8507 14.4004 10.0066L14.4021 10.0049C15.9578 8.95166 16.4361 6.87594 15.4953 5.25019M12.7515 15.4945C11.1241 16.4336 9.04999 15.9561 7.99671 14.4012L7.99505 14.3995C7.15093 13.1504 7.17926 11.5063 8.06588 10.2864L9.93744 7.71238C10.8241 6.49327 10.8524 4.84919 10.0083 3.59926L10.0049 3.59759C8.95166 2.04351 6.87594 1.56437 5.25019 2.50515M14.3029 3.69676C17.2319 6.62577 17.2319 11.3739 14.3029 14.3029C11.3739 17.2319 6.62577 17.2319 3.69676 14.3029C0.767747 11.3739 0.767747 6.62577 3.69676 3.69676C6.62577 0.767747 11.3739 0.767747 14.3029 3.69676Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const PuzzleIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M9 1.5L11.7 4.2C13.5 -0.525 18.525 4.5 13.8 6.3L16.5 9L13.8 11.7C12 6.975 6.975 12 11.7 13.8L9 16.5L6.3 13.8C4.5 18.525 -0.525 13.5 4.2 11.7L1.5 9L4.2 6.3C6 11.025 11.025 6 6.3 4.2L9 1.5Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const ContainerIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M15.375 5.45831L8.99998 8.99998M8.99998 8.99998L2.62498 5.45831M8.99998 8.99998L9 16.125M15.75 12.0439V5.95609C15.75 5.6991 15.75 5.57061 15.7121 5.45601C15.6786 5.35463 15.6239 5.26157 15.5515 5.18305C15.4697 5.0943 15.3574 5.0319 15.1328 4.9071L9.58277 1.82376C9.37007 1.7056 9.26372 1.64651 9.15109 1.62335C9.05141 1.60285 8.9486 1.60285 8.84891 1.62335C8.73628 1.64651 8.62993 1.7056 8.41723 1.82376L2.86723 4.9071C2.64259 5.0319 2.53026 5.0943 2.44847 5.18305C2.37612 5.26157 2.32136 5.35463 2.28786 5.45602C2.25 5.57061 2.25 5.69911 2.25 5.95609V12.0439C2.25 12.3009 2.25 12.4294 2.28786 12.544C2.32136 12.6454 2.37612 12.7384 2.44847 12.817C2.53026 12.9057 2.64259 12.9681 2.86723 13.0929L8.41723 16.1762C8.62993 16.2944 8.73628 16.3535 8.84891 16.3767C8.9486 16.3972 9.05141 16.3972 9.15109 16.3767C9.26372 16.3535 9.37007 16.2944 9.58277 16.1762L15.1328 13.0929C15.3574 12.9681 15.4697 12.9057 15.5515 12.817C15.6239 12.7384 15.6786 12.6454 15.7121 12.544C15.75 12.4294 15.75 12.3009 15.75 12.0439Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const LightningIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M10.6871 1.5H6.37047C6.23586 1.5 6.16855 1.5 6.10913 1.5205C6.05658 1.53862 6.00872 1.5682 5.96901 1.60709C5.92411 1.65107 5.89401 1.71127 5.83381 1.83167L2.68381 8.13167C2.54005 8.41919 2.46817 8.56295 2.48543 8.67981C2.50051 8.78185 2.55695 8.87318 2.64148 8.9323C2.73828 9 2.89901 9 3.22046 9H7.87465L5.62464 16.5L14.7695 7.01648C15.078 6.69653 15.2323 6.53655 15.2413 6.39966C15.2491 6.28084 15.2 6.16536 15.1091 6.08852C15.0043 6 14.782 6 14.3376 6H8.99965L10.6871 1.5Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const ColorsIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M8.99999 15.3542C9.79613 16.0667 10.8475 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.92481 15.0953 8.17769 13.1849 7.65763M4.81513 7.65762C2.9047 8.17768 1.5 9.9248 1.5 12C1.5 14.4853 3.51472 16.5 6 16.5C8.48528 16.5 10.5 14.4853 10.5 12C10.5 11.4146 10.3882 10.8554 10.1849 10.3424M13.5 6C13.5 8.48528 11.4853 10.5 9 10.5C6.51472 10.5 4.5 8.48528 4.5 6C4.5 3.51472 6.51472 1.5 9 1.5C11.4853 1.5 13.5 3.51472 13.5 6Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const HexagonIcon = ({ size }) => {
  return (
    <IconWrapper18 size={size}>
      <path
        d="M8.41723 1.82376C8.62993 1.7056 8.73628 1.64651 8.84891 1.62335C8.94859 1.60285 9.05141 1.60285 9.15109 1.62335C9.26372 1.64651 9.37007 1.7056 9.58277 1.82376L15.1328 4.9071C15.3574 5.0319 15.4697 5.0943 15.5515 5.18305C15.6239 5.26157 15.6786 5.35463 15.7121 5.45601C15.75 5.57061 15.75 5.6991 15.75 5.95609V12.0439C15.75 12.3009 15.75 12.4294 15.7121 12.544C15.6786 12.6454 15.6239 12.7384 15.5515 12.817C15.4697 12.9057 15.3574 12.9681 15.1328 13.0929L9.58277 16.1762C9.37007 16.2944 9.26372 16.3535 9.15109 16.3767C9.05141 16.3972 8.94859 16.3972 8.84891 16.3767C8.73628 16.3535 8.62993 16.2944 8.41723 16.1762L2.86723 13.0929C2.64259 12.9681 2.53026 12.9057 2.44847 12.817C2.37612 12.7384 2.32136 12.6454 2.28786 12.544C2.25 12.4294 2.25 12.3009 2.25 12.0439V5.95609C2.25 5.6991 2.25 5.57061 2.28786 5.45601C2.32136 5.35463 2.37612 5.26157 2.44847 5.18305C2.53026 5.0943 2.64259 5.0319 2.86723 4.9071L8.41723 1.82376Z"
        {...styles15}
      />
    </IconWrapper18>
  );
};

export const PlusIcon = ({ size, fill }) => {
  return (
    <IconWrapper28 size={size}>
      <path
        d="M22 0H6C2.68629 0 0 2.68629 0 6V22C0 25.3137 2.68629 28 6 28H22C25.3137 28 28 25.3137 28 22V6C28 2.68629 25.3137 0 22 0Z"
        fill={fill}
      />
      <path
        d="M14 9.91663V18.0833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.91663 14H18.0833"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper28>
  );
};

export const LogOutIcon = ({ size }) => {
  return (
    <IconWrapper32 size={size}>
      <path
        d="M11.8666 10.0801C12.28 5.28007 14.7466 3.32007 20.1466 3.32007H20.32C26.28 3.32007 28.6666 5.70674 28.6666 11.6667V20.3601C28.6666 26.3201 26.28 28.7067 20.32 28.7067H20.1466C14.7866 28.7067 12.32 26.7734 11.88 22.0534"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66669 16H19.84"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8666 11.5334L21.3333 16.0001L16.8666 20.4668"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrapper32>
  );
};

export const listBoardIcon = [
  { id: 'project', component: <ProjectIcon /> },
  { id: 'star', component: <StarIcon /> },
  { id: 'loading', component: <LoadingIcon /> },
  { id: 'puzzle', component: <PuzzleIcon /> },
  { id: 'container', component: <ContainerIcon /> },
  { id: 'lightning', component: <LightningIcon /> },
  { id: 'colors', component: <ColorsIcon /> },
  { id: 'hexagon', component: <HexagonIcon /> },
];

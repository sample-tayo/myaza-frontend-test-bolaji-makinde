import { cn } from "@/lib/utils";

const HelpIcon = ({ styling }: { styling?: string }) => (
  <svg
    className={cn("stroke-inherit", styling && styling)}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_16_565)">
      <path
        d="M7.57533 7.49984C7.77125 6.94289 8.15795 6.47326 8.66695 6.17411C9.17596 5.87497 9.77441 5.76562 10.3563 5.86543C10.9382 5.96524 11.466 6.26777 11.8462 6.71944C12.2264 7.17111 12.4345 7.74277 12.4337 8.33317C12.4337 9.99984 9.93366 10.8332 9.93366 10.8332M10.0003 14.1665H10.0087M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_16_565">
        <rect width="20" height="20" />
      </clipPath>
    </defs>
  </svg>
);

export default HelpIcon; 
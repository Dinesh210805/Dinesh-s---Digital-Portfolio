import { useState } from "react";

interface DownloadButtonProps {
  cvUrl?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  cvUrl = "https://drive.google.com/file/d/1AneFkPg0GTLBBZXwZhxprUvMkr__B9vD/view",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    if (!isChecked) {
      setIsChecked(true);
      // Wait for animation to complete before opening
      setTimeout(() => {
        window.open(cvUrl, "_blank");
        // Reset after a short delay
        setTimeout(() => setIsChecked(false), 500);
      }, 3500);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <label
        className={`
          relative flex items-center bg-transparent
          border-2 border-[rgb(91,91,240)] rounded-[50px] cursor-pointer
          transition-all duration-[0.4s] ease-[ease] p-[5px]
          ${isChecked ? "w-[57px]" : "w-[160px]"}
          [&:has(input:checked)]:[animation:installed_0.4s_ease_3.5s_forwards]
          before:content-[''] before:absolute before:inset-0 before:m-auto
          before:w-2 before:h-2 before:bg-white before:rounded-full
          before:transition-all before:duration-[0.4s] before:ease-[ease]
          before:opacity-0 before:invisible
          [&:has(input:checked)]::before:[animation:rotate_3s_ease-in-out_0.4s_forwards]
        `}
        onClick={handleClick}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          readOnly
        />

        <span
          className={`
          h-[45px] w-[45px] rounded-full bg-[rgb(91,91,240)]
          flex justify-center items-center relative overflow-hidden
          transition-all duration-[0.4s] ease-[ease]
          [box-shadow:0_0_0_0_rgb(255,255,255)]
          ${
            isChecked
              ? "[animation:pulse_1s_forwards,circleDelete_0.2s_ease_3.5s_forwards] rotate-180"
              : ""
          }
          before:content-[''] before:absolute before:left-0 before:top-0
          before:w-full before:h-0 before:bg-[#3333a8]
          before:transition-all before:duration-[0.4s] before:ease-[ease]
          ${
            isChecked
              ? "before:[animation:installing_3s_ease-in-out_forwards]"
              : ""
          }
        `}
        >
          <svg
            className={`
            w-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            text-white transition-all duration-[0.4s] ease-[ease]
            ${isChecked ? "opacity-0 invisible" : ""}
          `}
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
          <div
            className={`
            aspect-square w-[15px] rounded-[2px] bg-white
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            transition-all duration-[0.4s] ease-[ease]
            ${isChecked ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          />
        </span>

        <p
          className={`
          absolute right-[18px] bottom-[14px] text-[17px] text-white
          text-center transition-all duration-[0.4s] ease-[ease]
          ${isChecked ? "opacity-0 invisible" : ""}
        `}
        >
          Resume
        </p>
        <p
          className={`
          absolute right-[18px] bottom-[14px] text-[17px] text-white
          text-center transition-all duration-[0.4s] ease-[ease]
          opacity-0 invisible
          ${
            isChecked
              ? "[animation:showInstalledMessage_0.4s_ease_3.5s_forwards]"
              : ""
          }
        `}
        >
          Open
        </p>
      </label>
    </div>
  );
};

export default DownloadButton;

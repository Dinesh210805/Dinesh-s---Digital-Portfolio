import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center">
      <ul className="flex items-center">
        <li className="mx-2.5 relative group">
          <a
            href="https://linkedin.com/in/dinesh-kumar-c-93a38129b"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex justify-center items-center w-[50px] h-[50px] 
                     rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out
                     hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)]"
            data-social="linkedin"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#0274b3] transition-all duration-300 ease-in-out group-hover:h-full" />
            <Linkedin className="relative z-[1] w-[30px] h-[30px] group-hover:text-white transition-colors duration-300" />
          </a>
          <div
            className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-white py-1.5 px-2.5 rounded 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[-50px]
                        transition-all duration-300 bg-[#0274b3] text-sm"
          >
            LinkedIn
          </div>
        </li>

        <li className="mx-2.5 relative group">
          <a
            href="https://github.com/Dinesh210805"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex justify-center items-center w-[50px] h-[50px] 
                     rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out
                     hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)]"
            data-social="github"
          >
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#24262a] transition-all duration-300 ease-in-out group-hover:h-full" />
            <Github className="relative z-[1] w-[30px] h-[30px] group-hover:text-white transition-colors duration-300" />
          </a>
          <div
            className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-white py-1.5 px-2.5 rounded 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[-50px]
                        transition-all duration-300 bg-[#24262a] text-sm"
          >
            GitHub
          </div>
        </li>

        <li className="mx-2.5 relative group">
          <a
            href="https://instagram.com/im_.dinesh._19"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden flex justify-center items-center w-[50px] h-[50px] 
                     rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out
                     hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)]"
            data-social="instagram"
          >
            <div
              className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-tr from-[#405de6] via-[#e1306c] to-[#fd1d1d] 
                          transition-all duration-300 ease-in-out group-hover:h-full"
            />
            <Instagram className="relative z-[1] w-[30px] h-[30px] group-hover:text-white transition-colors duration-300" />
          </a>
          <div
            className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-white py-1.5 px-2.5 rounded 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[-50px]
                        transition-all duration-300 bg-gradient-to-r from-[#405de6] via-[#e1306c] to-[#fd1d1d] text-sm"
          >
            Instagram
          </div>
        </li>

        <li className="mx-2.5 relative group">
          <a
            href="mailto:dinesh210805@gmail.com"
            aria-label="Email"
            className="relative overflow-hidden flex justify-center items-center w-[50px] h-[50px] 
                     rounded-full bg-white text-[#4d4d4d] transition-all duration-300 ease-in-out
                     hover:shadow-[3px_2px_45px_0px_rgba(0,0,0,0.12)]"
            data-social="email"
          >
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-[#4285f4] transform origin-bottom 
                            scale-y-0 transition-transform duration-300 ease-in-out 
                            group-hover:scale-y-100"
              />
            </div>
            <Mail className="relative z-[1] w-[30px] h-[30px] group-hover:text-white transition-colors duration-300" />
          </a>
          <div
            className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-white py-1.5 px-2.5 rounded 
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-[-50px]
                        transition-all duration-300 bg-[#4285f4] text-sm"
          >
            Email
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;

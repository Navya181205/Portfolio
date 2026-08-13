import resumePdf from "../assets/SS_NAVYA_Resume.pdf";

export const PORTFOLIO_INFO = {
  name: "SS NAVYA",
  role: "Computer Science Student • Machine Learning & Full-Stack Developer",
  email: "navyashankargallu@gmail.com",
  phone: "+91 9380348636",
  github: "https://github.com/Navya181205",
  linkedin: "https://www.linkedin.com/in/navya-shankargallu",
  webmail: "https://mail.google.com/mail/?view=cm&fs=1&to=navyashankargallu@gmail.com",
  resume: resumePdf,
  resumeDownload: resumePdf,
};

export const handleResumeDownload = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  const link = document.createElement("a");
  link.href = PORTFOLIO_INFO.resumeDownload;
  link.download = "SS NAVYA_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};




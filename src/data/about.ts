type AboutProps = {
  title: string;
  content: string;
  info: { fieldName: string; fieldValue: string }[];
};

const about: AboutProps = {
  title: "About me",
  content:
    "I am a dedicated frontend developer passionate about creating dynamic and responsive web applications.",
  info: [
    { fieldName: "Name", fieldValue: "Abbosbek Ruzimov" },
    { fieldName: "Date of birth", fieldValue: "12.02.2000" },
    { fieldName: "Place of birth", fieldValue: "Khorezm" },
    { fieldName: "Nationality", fieldValue: "Uzbek" },
    { fieldName: "Phone", fieldValue: "+998 33 027 33 12" },
    { fieldName: "Email", fieldValue: "abeekoffi@gmail.com" },
  ],
};

export default about;

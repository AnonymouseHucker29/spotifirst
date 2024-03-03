import FooterData from "@/data/footerContactsData";
import { montserrat } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col gap-y-5 p-5 bg-[#EADDFF] dark:bg-[#1D1B20]">
      <div className="flex justify-center items-center gap-x-4">
        {FooterData.map((contact) => (
          <div key={contact.id}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-full px-2"
                title={contact.name}
              >
                {contact.icon}
              </Button>
            </a>
          </div>
        ))}
      </div>
      <p className={`${montserrat.className} font-normal text-center`}>
        <b>©</b> 2024 Brent Baylon <b>|</b> All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

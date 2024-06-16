"use client";
import { Header } from "@/atomic/organism/Header";
import { ReactNode, TouchList, useState } from "react";
import { Home } from "./Home";
import { Sobre } from "./Sobre";
import { Projetos } from "./Projetos";
import { Contato } from "./Contato";

interface Page {
  title: string;
  component: ReactNode;
  backgroundColor: string;
}

export interface HomeTemplateProps {
  whatsappLink: string;
  githubLink: string;
  gitlabLink: string;
  linkedinLink: string;
}

export function HomeTemplate({
  githubLink,
  gitlabLink,
  linkedinLink,
  whatsappLink,
}: HomeTemplateProps) {
  const [activePage, setActivePage] = useState(0);
  const [touchStart, setTouchStart] = useState<TouchList[0]>();

  const pages: Page[] = [
    {
      title: "home",
      component: <Home key={"home"} />,
      backgroundColor: "#1C1C1C",
    },
    {
      title: "sobre",
      component: <Sobre key={"sobre"} />,
      backgroundColor: "#545454",
    },
    {
      title: "projetos",
      component: <Projetos key={"projetos"} />,
      backgroundColor: "#154BD4",
    },
    {
      title: "contato",
      component: <Contato key={"contato"} />,
      backgroundColor: "#1C1C1C",
    },
  ];

  function handleScroll(event: React.WheelEvent<HTMLDivElement>) {
    if (event.deltaY > 0 && activePage < pages.length - 1) {
      const newActivePage = activePage + 1;
      setActivePage(newActivePage);

      const element = document.getElementById(pages[newActivePage].title);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (event.deltaY < 0 && activePage > 0) {
      const newActivePage = activePage - 1;
      setActivePage(newActivePage);

      const element = document.getElementById(pages[newActivePage].title);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleTouch(event: React.TouchEvent<HTMLDivElement>) {
    if (event.type === "touchstart") {
      setTouchStart(event.touches[0]);
    } else if (event.type === "touchend" && touchStart) {
      const touchEnd = event.changedTouches[0];
      const leftToRight = touchEnd.clientX - touchStart.clientX;
      const topToBottom = touchEnd.clientY - touchStart.clientY;

      if (Math.abs(leftToRight) > Math.abs(topToBottom)) {
        return;
      }

      if (topToBottom < 0 && activePage < pages.length - 1) {
        const newActivePage = activePage + 1;
        setActivePage(newActivePage);

        const element = document.getElementById(pages[newActivePage].title);
        element?.scrollIntoView({ behavior: "smooth" });
      } else if (topToBottom > 0 && activePage > 0) {
        const newActivePage = activePage - 1;
        setActivePage(newActivePage);

        const element = document.getElementById(pages[newActivePage].title);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  const mainBackgroundColor = pages[activePage].backgroundColor;

  return (
    <div
      className="p-10 h-screen select-none relative transition-colors duration-700"
      style={{ backgroundColor: mainBackgroundColor }}
      onTouchStart={handleTouch}
      onTouchEnd={handleTouch}
    >
      <div
        className="h-full border-[#333] border overflow-hidden "
        onWheel={handleScroll}
      >
        <Header
          className="absolute top-0 right-0 p-[5rem]"
          githubLink={githubLink}
          gitlabLink={gitlabLink}
          linkedinLink={linkedinLink}
          whatsappLink={whatsappLink}
        />

        {pages.map((page) => page.component)}
      </div>
    </div>
  );
}

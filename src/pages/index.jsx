import Image from "next/image";
import Layout from "@/Layout";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [clickedDiv, setClickedDiv] = useState();
  return (
    <Layout>
      <Head>
        <title>Web Console Frontend Task</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="flex items-center h-[100vh]">
        <div
          onClick={() => {
            setClickedDiv(1);
          }}
          className={`${
            clickedDiv == 1 ? "w-full" : "w-[50%]"
          } duration-300 relative h-full bg-[#BAA6E2] flex items-center justify-center`}
        >
          {clickedDiv == 1 && (
            <h1
              style={{ fontFamily: "Poppins" }}
              className="text-[512px] duration-300 font-bold text-white"
            >
              One
            </h1>
          )}
          <Image
            className={`absolute duration-300 ${
              clickedDiv == 1 ? "-rotate-45 mt-12" : ""
            }`}
            src="/images/shoe1.png"
            alt="shoe1"
            width={clickedDiv == 1 ? 1000 : 450}
            height={500}
          />
        </div>
        <div
          onClick={() => {
            setClickedDiv(2);
          }}
          className={`${
            clickedDiv == 2 ? "w-full" : "w-[50%]"
          } duration-300 relative h-full bg-[#C7FB41] flex items-center justify-center`}
        >
          {clickedDiv == 2 && (
            <h1
              style={{ fontFamily: "Poppins" }}
              className="text-[512px] duration-300 font-bold text-white"
            >
              One
            </h1>
          )}
          <Image
            className={`absolute duration-300 ${
              clickedDiv == 2 ? "-rotate-45 mt-12" : ""
            }`}
            src="/images/shoe2.png"
            alt="shoe2"
            width={clickedDiv == 2 ? 1000 : 450}
            height={500}
          />
        </div>
        <div
          onClick={() => {
            setClickedDiv(3);
          }}
          className={`${
            clickedDiv == 3 ? "w-full" : "w-[50%]"
          } duration-300 relative h-full bg-[#DFD4C4] flex items-center justify-center`}
        >
          {clickedDiv == 3 && (
            <h1
              style={{ fontFamily: "Poppins" }}
              className="text-[512px] duration-300 font-bold text-white"
            >
              One
            </h1>
          )}
          <Image
            className={`absolute duration-300 ${
              clickedDiv == 3 ? "-rotate-45 mt-12 w-[1000px]" : ""
            }`}
            src="/images/shoe3.png"
            alt="shoe3"
            width={clickedDiv == 3 ? 1000 : 450}
            height={500}
          />
        </div>
      </main>
    </Layout>
  );
}

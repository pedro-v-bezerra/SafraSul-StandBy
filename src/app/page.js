'use client'
import Image from "next/image"
import { useState } from 'react'

export default function Index() {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  const locations = [
    { name: 'CAMPO GRANDE - MS', address: 'Rua Lagoa Rica 42.<br/>Jd.Panorama.<br/>CEP 79044-670' },
    { name: 'MONTES CLAROS - MG', address: 'Av. Gov. Magalhães Pinto, 2069<br/>Bairro Alcides Rabelo.<br/>CEP 39401-427' },
    { name: 'FORMOSO - MG', address: 'Estrada Buritis/Alvorada, Km 100.<br/>Zona Rural.<br/>CEP 38690-000' },
    { name: 'FORMOSA - GO', address: 'Av. Brasília, 1440<br/>Bairro Formosinha<br/>CEP 73813-010' },
  ];

  return (
    <>
      <div className="bg-[url('/imgs/fundo-safrasul.png')] bg-cover w-auto h-screen md:h-[800px] p-8 relative">
        <div className="pb-16 md:pb-24 xl:pb-56 flex flex-col items-center md:items-start">
          <Image
            src='/imgs/logo-branco.png'
            alt="Logo"
            width={231}
            height={55}
            objectFit="contain"
            className=""
          />
          <h1 className="text-white font-openSans font-light text-[0.35rem] tracking-[0.3rem]">QUALIDADE QUE ENRIQUECE O AGRO</h1>
        </div>
        <div className="px-4 lg:px-28">
          <div className="pb-10 md:pb-20">
            <h1 className="text-white text-xl md:text-5xl text-center font-openSans font-light tracking-[0.2rem] md:tracking-[0.5rem]">
              Em breve, um novo site para você!
            </h1>
          </div>
          <div className="grid grid-cols-2 md:flex justify-center items-center bg-[#0A5C0A] rounded-full py-2 ">
            {locations.map((location, index) => (
              <div key={index} className="relative flex justify-center items-center">
                <p
                  className="font-openSans text-center text-white md:tracking-[0.1rem] xl:tracking-[0.3rem] font-light text-xs lg:text-base cursor-pointer"
                  onMouseEnter={() => setHoveredLocation(index)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  {location.name}
                </p>
                {hoveredLocation === index && (
                  <div className="absolute top-full mt-2 bg-white text-black text-xs p-2 rounded shadow-lg z-10">
                    <div dangerouslySetInnerHTML={{ __html: location.address }} />
                  </div>
                )}
                {index < locations.length - 1 && (
                  <p className="font-openSans text-white lg:px-2 xl:px-4 hidden md:block">|</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-8 md:pt-12 pb-4">
            <Image
              src='/imgs/phone.svg'
              alt="Telefone"
              width={325}
              height={55}
              objectFit="contain"
              className=""
            />
          </div>
          <div className="flex gap-2 justify-center">
            <Image
              src='/imgs/facebook.svg'
              alt="Facebook"
              width={16}
              height={16}
              objectFit="contain"
              className=""
            />
            <Image
              src='/imgs/instagram.svg'
              alt="Instagram"
              width={16}
              height={16}
              objectFit="contain"
              className=""
            />
            <p className="font-openSans text-white text-sm md:text-base">safrasulsementes</p>
          </div>
        </div>
      </div>
    </>
  )
}

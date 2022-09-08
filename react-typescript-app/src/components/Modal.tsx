import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal(props: ModalProps) {
  return (
    <>
      <div
        className=" fixed bg-black/50 top-0 left-0 right-0 bottom-0"
        onClick={props.onClose}
      />
      <div className="fixed top-10 left-1/2 w-[500px] p-5 rounded bg-white -translate-x-1/2">
        <h1 className=" text-2xl text-center mb2">{props.title}</h1>
        {props.children}
      </div>
    </>
  );
}

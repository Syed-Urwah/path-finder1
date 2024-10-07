"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useSearchParams } from "next/navigation";
interface ModalProps {
  button: React.ReactNode;
}

export function Modal({ button, pages, setPages }: any) {
  const searchParams = useSearchParams();
  //only question_type_id=1 is added Todo(remaining)
  function handleAddQuestion(event: any): any {
    const id = event.currentTarget.id; // Access the button's id

    console.log(id);

    const newQuestion = {
      question_type_id: 1,
      name: "New Question",
      answers: [
        { ans: "New Answer 1", img: "" },
        { ans: "New Answer 2", img: "" },
      ],
    };

    const updatedValue = pages?.map((page: any) => {
      const pageIndex = searchParams.get("page");
      console.log("pageIndex", pageIndex);

      const currentPageIndex = pages.indexOf(page);
      console.log("currentPageIndex", currentPageIndex);

      if (currentPageIndex == pageIndex) {
        // Add the new question to the page with order: 1
        return {
          ...page,
          questions: [...page.questions, newQuestion],
        };
      }
      return page; // Return other pages without changes
    });
    setPages(updatedValue);
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>{button}</DialogTrigger>
        <DialogContent className="lg:max-w-[1000px] lg:max-h-full">
          <div className="grid grid-cols-4">
            <Input type="text" placeholder="Search..." className="" />
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <Label className="font-bold">Configurator questions</Label>
            </div>
            <div className="col-span-4">
              <Label className="font-bold">Contact Information</Label>
            </div>
            <div className="col-span-4">
              <Label className="font-bold">Company Information</Label>
            </div>

            <div className="col-span-4">
              <DialogClose asChild>
                <button
                  onClick={handleAddQuestion}
                  id="1"
                  className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer"
                >
                  <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                    <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center flex-col">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="circle"
                        className="svg-inline--fa fa-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20px"
                        height="20px"
                      >
                        <path
                          fill="#000000"
                          d="M256 8C119.4 8 8 119.4 8 256s111.4 248 248 248 248-111.4 248-248S392.6 8 256 8zM256 464c-114.9 0-208-93.1-208-208S141.1 48 256 48s208 93.1 208 208-93.1 208-208 208z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p>Multiple choice question</p>
                </button>
              </DialogClose>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="user"
                      className="w-[24px] h-[24px] text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>First Name</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#FFA500] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="building"
                      className="svg-inline--fa fa-building text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Company name</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="svg-inline--fa fa-check text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Multiple select question</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="user"
                      className="w-[24px] h-[24px] text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Last Name</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#FFA500] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="building"
                      className="svg-inline--fa fa-building text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Chamber of Commerce</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden undefined">
                  <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center flex-col">
                    <div className="w-[24px] h-[24px] rounded-[5px] bg-black flex justify-center items-center">
                      <p className="text-white text-[10px]">1 m²</p>
                    </div>
                  </div>
                </div>
                <p>Number question</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="at"
                      className="svg-inline--fa fa-at"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Email</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#FFA500] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="address-card"
                      className="svg-inline--fa fa-address-card text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Contact Person</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="check"
                      className="svg-inline--fa fa-check text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Dropdown question</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="phone"
                      className="svg-inline--fa fa-phone"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ width: "20px", height: "20px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Phone</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#FFA500] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="briefcase"
                      className="svg-inline--fa fa-briefcase text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>VAT Number</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#D8BFD8] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="palette"
                      className="svg-inline--fa fa-palette"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Color picker</p>
              </button>
            </div>

            <div className="col-span-4"></div>
            <div className="col-span-4"></div>

            <div className="col-span-4">
              <Label className="font-bold">Text</Label>
            </div>
            <div className="col-span-4">
              <Label className="font-bold">Address Information</Label>
            </div>
            <div className="col-span-4">
              <Label className="font-bold">Planning</Label>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden undefined">
                  <div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                    <div className="w-full h-full bg-[#C6CEFF] flex justify-center items-center flex-col">
                      <div className="w-[10px] h-[3px] bg-black rounded-full mb-[3px]"></div>
                      <div className="w-[16px] h-[3px] bg-black rounded-full mb-[3px]"></div>
                      <div className="w-[10px] h-[3px] bg-black rounded-full mb-[3px]"></div>
                      <div className="w-[16px] h-[3px] bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p>Long text input field</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#F8BBD0] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="road"
                      className="svg-inline--fa fa-road"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Street</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#2E8B57] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-days"
                      className="svg-inline--fa fa-calendar-days text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Date</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden undefined">
                  <div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                    <div className="w-full h-full bg-[#C6CEFF] flex justify-center items-center flex-col">
                      <div className="w-[10px] h-[3px] bg-black rounded-full mb-[3px]"></div>
                      <div className="w-[16px] h-[3px] bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
                <p>Short text input filed</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#F8BBD0] flex justify-center items-center flex-col">
                    <div className="w-[28px] h-[28px] rounded-[5px] bg-black flex justify-center items-center">
                      <p className="text-white text-[12px]">12</p>
                    </div>
                  </div>
                </div>
                <p>House Number</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#2E8B57] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="calendar-days"
                      className="svg-inline--fa fa-calendar-days text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="20px"
                      height="20px"
                    >
                      <path
                        fill="currentColor"
                        d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Time</p>
              </button>
            </div>

            <div className="col-span-4"></div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#F8BBD0] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="location-dot"
                      className="svg-inline--fa fa-location-dot"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>Postal Code</p>
              </button>
            </div>

            <div className="col-span-4">
              <Label className="font-bold">File upload</Label>
            </div>

            <div className="col-span-4"></div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#F8BBD0] flex justify-center items-center flex-col">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="city"
                      className="svg-inline--fa fa-city"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      style={{ width: "24px", height: "24px" }}
                    >
                      <path
                        fill="currentColor"
                        d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>City</p>
              </button>
            </div>

            <div className="col-span-4">
              <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden">
                  <div className="w-full h-full bg-[#FFA500] flex justify-center items-center">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="paperclip"
                      className="w-[24px] h-[24px] text-black"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p>File upload</p>
              </button>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

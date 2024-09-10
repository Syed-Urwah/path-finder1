"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label";
interface ModalProps {
    title: string;
  }
  
export function Modal({ title }: ModalProps) {
  return (
  <>
  <Dialog>
        <DialogTrigger asChild>
                <Button variant="outline">{title}</Button>
            </DialogTrigger>
              <DialogContent className="lg:max-w-[1000px] lg:max-h-full">
                <div className='grid grid-cols-4'>
                    <Input
                    type="text"
                    placeholder="Search..." className=''
                    />
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
                       <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                       <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden undefined"><div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user text-[14px] w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                            </svg>

                        </div>
                        </div>
<p>jhkjhkjh</p>
                       </button>
                    </div>
                    <div className="col-span-4">
                    <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                       <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden undefined"><div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user text-[14px] w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                            </svg>

                        </div>
                        </div>
<p>jhkjhkjh</p>
                       </button>

                    </div>
                    <div className="col-span-4">
                    <button className="w-full flex gap-2 items-center hover:bg-[#0000000d] hover:p-[5px] hover:m-[-5px] rounded-[5px] cursor-pointer">
                       <div className="w-[40px] h-[40px] rounded-[12px] flex justify-center items-center overflow-hidden undefined"><div className="w-full h-full bg-[#BCE4A8E5] flex justify-center items-center flex-col">
                       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user text-[14px] w-6 h-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
                            </svg>

                        </div>
                        </div>
<p>jhkjhkjh</p>
                       </button>
                    </div>

                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog></>
  )
}






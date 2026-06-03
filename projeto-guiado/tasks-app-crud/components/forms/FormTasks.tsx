'use client'

import { FC, useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { FormError } from "../FormError";

type FormTasksProps = {
  action: ( _: string, formData: FormData) => Promise<string>;
}

export const FormTasks: FC<FormTasksProps> = ({ action }) => {

  const router = useRouter();
  const [task, setTask] = useState("");
  const [wasPending, setWasPending] = useState(false);

  const [errorMessage, formAction, isPending] = useActionState(action, "");

  useEffect(() => {
    if (isPending) {
      setWasPending(true);
    }

    if (wasPending && !isPending) {
      if (!errorMessage) {
        setTask("");
        router.refresh();
      }
      setWasPending(false);
    }
  }, [isPending, errorMessage, router, wasPending]);

  return (
    <>
      {!isPending && <FormError message={errorMessage} />}

      <form className="relative shadow-lg rounded-lg" action={formAction}>
        <input 
          className="w-full pl-2 pr-9 py-1 
          text-[#7b7c7b] border border-[#e8e9e9] 
          hover:border-[#b1b2b2] focus:border-[#b1b2b2] 
          outiline-none rounded-lg"
          name="task"
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Informe o título da task"
        />

        <button 
          className="absolute top-0 right-0 bottom-0 px-3 bg-[#141516] text-white rounded-r-lg cursor-pointer">
          +
        </button>
      </form>
    </>
  );
}

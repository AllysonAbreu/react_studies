import { fetchWithToken } from "@/lib/fetchWithToken";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const handleCreateTask = async( _: string, formData: FormData) => {
    'use server';

    const task = formData.get("task")?.toString() || "";

    if(!task) {
        return "Task title is required";
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    
    try {
        const body = {
            title: task
        };

        if(!token) {
            return "User is not authenticated";
        } else {
          const {message} = await fetchWithToken(
            `${process.env.BACKEND_URL}/tasks`,
             token,
             { 
              method: "POST",
              body: JSON.stringify(body)
            }
          );
          
          if(message) {
            return message;
          }

          revalidatePath('/tasks');
        }
    } catch (error) {
        console.error("Error during task creation:", error);
        return "An error occurred during task creation";
    }
  }

export const handleCompleteTask = async(formData: FormData) => {
    'use server';

    const id = formData.get("id")?.toString() || "";

    if(!id) {
        console.error("Task ID is required");
        return;
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    
    try {
        if(!token) {
            console.error("User is not authenticated");
            return;
        } else {
          const {message} = await fetchWithToken(
            `${process.env.BACKEND_URL}/tasks/${id}/complete`,
             token,
             { 
              method: "PUT",
            }
          );
          
          if(message) {
            console.log(message);
            return;
          }

          revalidatePath('/tasks');
        }
    } catch (error) {
        console.error("Error during task completion:", error);
        return;
    }
  }
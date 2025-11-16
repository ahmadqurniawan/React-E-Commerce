"use server";

import { prisma } from "@/lib/prisma";
import { contactFormSchema } from "@/lib/zod";
import { error } from "console";

export const ContactMessage = async (prevState: unknown,formData: FormData) => {
    const validatedFields = contactFormSchema.safeParse(Object.fromEntries(formData.entries()))

    if (!validatedFields.success) {
        return { error: validatedFields.error.flatten().fieldErrors };
    }

    const { name, email, subject, message } = validatedFields.data;

    try {
        await prisma.contact.create({
            data: {
                name,
                email, 
                subject,
                message,
            },
        });
        return { message: "Thanks for contacting us." };
    } catch (error) {
        console.log(error);
        
    }
};
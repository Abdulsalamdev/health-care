"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "../CustomFormField";

export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SECLECT = "select",
  SKELETON = "skeleton",
}
const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-x-4">
          <h1 className="header">Hi there, ....</h1>
          <p className="text-dark-700">Schedule Your first appintment</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name="email"
          label="Email address"
          placeholder="JohnDoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.PHONE_INPUT}
          name="phone"
          label="Phone Number"
          placeholder="(555) 1234-567"
        />
        <Button
          type="submit"
          className="flex justify-center items-center w-full bg-green-500 text-white"
        >
          Get Started
        </Button>
      </form>
    </Form>
  );
};

"use client";

import {
  emailInvalidMessage,
  requiredMessage,
} from "@/lib/consts/form/error-messages";
import TextArea from "../standard/form/text-area";
import TextInput from "../standard/form/text-input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { emailRegex } from "@/lib/consts/form/regex-validations";
import PrimaryButton from "../standard/primary-button";
import toast from "react-hot-toast";

export default function EnquiryForm() {
  const schema = yup.object({
    firstName: yup.string().required(requiredMessage),
    lastName: yup.string().required(requiredMessage),
    email: yup
      .string()
      .matches(emailRegex, { message: emailInvalidMessage })
      .required(requiredMessage),
    subject: yup.string().required(requiredMessage),
    message: yup.string().required(requiredMessage),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    const toastId = toast.loading("Sending your enquiry...");

    const { firstName, lastName, email, subject, message } = data;

    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json,",
      },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        subject,
        message,
      }),
    });

    if (res.ok) {
      toast.success("Enquiry sent successfully! Please wait for our response.");
    } else {
      toast.error("Something went wrong. Please try again later.");
    }

    toast.dismiss(toastId);
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4">
        <div className="w-full">
          <TextInput
            label="First name"
            placeholder="John"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
        </div>
        <div className="w-full">
          <TextInput
            label="Last name"
            placeholder="Doe"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </div>
      </div>

      <div className="w-full">
        <TextInput
          label="Email address"
          placeholder="john.doe@example.com"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <div className="w-full">
        <TextInput
          label="Enquiry subject"
          placeholder="Enquiry about ..."
          {...register("subject")}
          error={errors.subject?.message}
        />
      </div>

      <div className="w-full">
        <TextArea
          label="Message"
          placeholder="I'd like to enquire about ..."
          {...register("message")}
          error={errors.message?.message}
        />
      </div>

      <PrimaryButton className="text-sm">Submit</PrimaryButton>
    </form>
  );
}

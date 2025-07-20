"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";
import { createCompanion } from "@/lib/actions/companion.action";
import { redirect } from "next/navigation";

// Zod schema with plain number and .min for validation
const formSchema = z.object({
  name:    z.string().min(1, { message: "Companion is required" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  topic:   z.string().min(1, { message: "Topic is required" }),
  voice:   z.string().min(1, { message: "Voice is required" }),
  style:   z.string().min(1, { message: "Style is required" }),
  duration: z
    .number()
    .min(1, { message: "Duration is required and must be at least 1 minute." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function CompanionForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name:     "",
      subject:  "",
      topic:    "",
      voice:    "",
      style:    "",
      duration: 15,
    },
  });

  const onSubmit = async (values: FormValues) => {
    const companion = await createCompanion(values);
    if (companion) {
      redirect(`/companions/${companion.id}`);
    } else {
      console.error("Failed to create companion");
      redirect("/");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Companion Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Companion Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter the companion name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="input-capitalize">
                      <SelectValue placeholder="Select the Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subj) => (
                        <SelectItem key={subj} value={subj} className="capitalize">
                          {subj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Topic */}
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What should the companion help with?</FormLabel>
                <FormControl>
                  <Textarea placeholder="e.g. Neural Networks" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Voice */}
          <FormField
            control={form.control}
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voice</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="input">
                      <SelectValue placeholder="Select the Voice" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Style */}
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="input">
                      <SelectValue placeholder="Select the Style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">Formal</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Duration */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Session Duration (minutes)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    placeholder="Enter duration"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Build your Companion
          </Button>
        </form>
      </Form>
    </div>
  );
}

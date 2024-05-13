"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  createExerciseDefaultValues,
  createExerciseForm,
} from "@/schemas/create-exercise";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaWindowClose } from "react-icons/fa";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

export function CreateWorkoutForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof createExerciseForm>>({
    resolver: zodResolver(createExerciseForm),
    defaultValues: createExerciseDefaultValues,
  });

  const onSubmit = (values: z.infer<typeof createExerciseForm>) => {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold">
                  Exercise Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Jumping Jacks"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="instructions"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold">
                  Instructions
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Type the instructions for this exercise"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-3xl font-semibold">Time</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="repeats" />
                      </FormControl>
                      <FormLabel className="text-2xl font-semibold">
                        Repeats
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="duration" />
                      </FormControl>
                      <FormLabel className="text-2xl font-semibold">
                        Duration (seconds)
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-semibold">
                  Youtube Video Link
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="https://www.youtube.com/"
                    type="url"
                    className="text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="muscles"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-3xl font-semibold">
                  Focus Area
                </FormLabel>
                <div className="flex flex-wrap items-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            field.value.length < 1 && "text-muted-foreground",
                          )}
                        >
                          {field.value.length > 0
                            ? `${field.value.length} selected`
                            : "Focus Area"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    {field.value.length > 0 && (
                      <TooltipProvider delayDuration={500}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="mx-1"
                              onClick={() => form.resetField("muscles")}
                            >
                              <FaWindowClose size={24} />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="text-sm font-semibold">
                            Clear All
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search area..." />
                        <CommandEmpty>No muscle found.</CommandEmpty>
                        <CommandList>
                          <CommandGroup>
                            {items.map((item, index) => (
                              <Label key={index}>
                                <CommandItem className="flex items-center gap-1">
                                  <Checkbox
                                    checked={field.value.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id,
                                            ),
                                          );
                                    }}
                                  />
                                  {item.label}
                                </CommandItem>
                              </Label>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  {field.value.length > 0 && (
                    <div className="flex flex-wrap gap-1 rounded border border-dashed p-1">
                      {field.value.map((muscleId, index) => {
                        const current = items.find(
                          (item) => item.id === muscleId,
                        );
                        return (
                          <Badge key={index} className="text-sm">
                            <span>{current?.label}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  )}
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full text-xl font-semibold"
            disabled={isLoading}
          >
            {isLoading && <ReloadIcon className="mr-2 size-6 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
